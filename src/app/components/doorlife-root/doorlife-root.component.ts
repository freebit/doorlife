import {
  Component,
  Renderer2,
  ViewContainerRef,
  ElementRef,
  ComponentRef,
  TemplateRef,
  OnInit,
  AfterViewInit,
  ViewChild,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef
} from '@angular/core';

import { SytemAlert } from '../ui/system-alert/system-alert.component';

@Component({
  selector: 'doorlife-root',
  templateUrl: './doorlife-root.component.html',
  styleUrls: ['./doorlife-root.component.less']
})

export class DoorLifeRoot implements OnInit, AfterViewInit {

  title: string = 'root component title';

  alert : ComponentRef<any>

  tplView: EmbeddedViewRef<any>;
  @ViewChild('tpl_1') tpl1: TemplateRef<any>;



  constructor(
      private renderer: Renderer2,
      private viewContainerRef: ViewContainerRef,
      private elementRef: ElementRef,

      private _injector: Injector,
      private _cfResolver: ComponentFactoryResolver
  ) {

  }

  ngOnInit(){}

  ngAfterViewInit(){

    // let buttonElement = this.renderer.createElement('button');
    //
    // const text = this.renderer.createText(this.title);
    //
    // this.renderer.appendChild(buttonElement, text);
    // this.renderer.appendChild(this.elementRef.nativeElement, buttonElement);

  }

  childDataFetch(initData){
    this.showAlert('');
  }

  showAlert(str:String){

    if(this.alert != null){
      this.alert.instance.showAlert(str);
    }else{

      const SytemAlertComponentFactory = this._cfResolver.resolveComponentFactory(SytemAlert);

      this.alert = this.viewContainerRef.createComponent(
          SytemAlertComponentFactory,
          0
      );


      this.alert.instance.showAlert(str);
    }



  }

  destroyAlert(){
    if(this.alert != null){
      this.alert.destroy();
      this.alert = null;
    }
  }

}
