import {
  Component,
  ViewContainerRef,
  ComponentRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ComponentFactoryResolver,
  NgZone,
  ViewChild,
  ElementRef
} from '@angular/core';


import { SytemAlert } from '../ui/system-alert/system-alert.component';
import {ResizeEvent} from 'angular-resizable-element';

@Component({
  selector: 'doorlife-root',
  templateUrl: './doorlife-root.component.html',
  styleUrls: ['./doorlife-root.component.less']
})

export class DoorLifeRoot implements OnInit, AfterViewInit, OnDestroy {

  componentCssDisplay: string = 'fixed';
  doorViewStyle: Object = {};

  @ViewChild('doorlife') doorlife: ElementRef;
  @ViewChild('selector') selector: ElementRef;
  @ViewChild('interiorImage') interiorImage: ElementRef;
  @ViewChild('doorView') doorView: ElementRef;


  title: string = '';
  currentInteriorUrl: string = '';
  currentDoorUrl: string = '';
  alert : ComponentRef<any>;

  constructor(
      private viewContainerRef: ViewContainerRef,
      private _cfResolver: ComponentFactoryResolver,
      private ngZone: NgZone
  ) {

  }

  ngOnInit(){

    this.componentCssDisplay = this.viewContainerRef.element.nativeElement.style.display;
    //this.viewContainerRef.element.nativeElement.style.display = 'none';

    this.publicShow('http://estetdveri.ru/images/Elegance/e5/elegance_e5_n_korica_black-min.png');

    this.globalInit();
  }

  ngAfterViewInit(){
      let self = this;
      let x = 0;

      this.interiorImage.nativeElement.onload = function() {

        let doorLifeWidth = self.doorlife.nativeElement.clientWidth;
        let interiorImageWidth = this.width,
            interiorImageHeight = this.height;

        self.selector.nativeElement.style.width = (doorLifeWidth - interiorImageWidth - 2) + 'px';
        console.log(`interior width - height ${interiorImageWidth} - ${interiorImageHeight}`);

      };
  }

  globalInit(){
      window['freeb'] = window['freeb'] || {};
      window['freeb'].doorlife = window['freeb'].doorlife || {};

      window['freeb'].doorlife.open = this.publicShow.bind(this);
      window['freeb'].doorlife.close = this.publicClose.bind(this);
  }


  childDataFetch(initData){}

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;

    if(event.edges.right && !event.edges.bottom){}

    if (event.rectangle.width < MIN_DIMENSIONS_PX || event.rectangle.height < MIN_DIMENSIONS_PX) {
      return false;
    }

    return true;
  }


  onResizeEnd(event: ResizeEvent): void {
    this.doorViewStyle = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  setInterior(imageUri){
    this.currentInteriorUrl = imageUri;
  }

  setDoor(imageUri){
    this.currentDoorUrl = imageUri;
  }

  showAlert(str:String){
     if(this.alert != null) {
      this.alert.instance.showAlert(str);
    }else {
      const SytemAlertComponentFactory = this._cfResolver.resolveComponentFactory(SytemAlert);
      this.alert = this.viewContainerRef.createComponent(SytemAlertComponentFactory, 0);
      this.alert.instance.showAlert(str);
    }

    //alert(str)

  }

  destroyAlert(){
    if(this.alert != null){
      this.alert.destroy();
      this.alert = null;
    }
  }

  show(){
    this.viewContainerRef.element.nativeElement.style.display = this.componentCssDisplay;
  }

  hide(){
    this.componentCssDisplay = this.viewContainerRef.element.nativeElement.style.display;
    this.viewContainerRef.element.nativeElement.style.display = 'none';
  }

  publicShow(uri?:string){
    this.ngZone.run(() => {
      uri && (this.currentDoorUrl = uri);
      this.show();
    });
  }

  publicClose(){
    this.ngZone.run(() => this.hide());
  }

  ngOnDestroy(){
    this.destroyAlert();
    window['freeb'].doorlife.showAlert = null;
  }

  // @HostBinding('window:resize')
  // updateDimentions(){
  //   console.log('window:resize')
  // }

}
