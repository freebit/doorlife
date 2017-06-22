import {
  Component,
  ViewContainerRef,
  ComponentRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ComponentFactoryResolver,
  NgZone
} from '@angular/core';

import { SytemAlert } from '../ui/system-alert/system-alert.component';

@Component({
  selector: 'doorlife-root',
  templateUrl: './doorlife-root.component.html',
  styleUrls: ['./doorlife-root.component.less']
})

export class DoorLifeRoot implements OnInit, AfterViewInit, OnDestroy {

  componentCssDisplay: string = 'fixed';

  title: string = 'root component title';
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
    this.viewContainerRef.element.nativeElement.style.display = 'none';

    window['freeb'] = window['freeb'] || {};
    window['freeb'].doorlife = window['freeb'].doorlife || {};
    window['freeb'].doorlife.open = this.publicShow.bind(this);
    window['freeb'].doorlife.close = this.publicClose.bind(this);
  }

  ngAfterViewInit(){

  }

  childDataFetch(initData){

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

}
