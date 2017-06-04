import { Component, Input, OnInit, AfterViewInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'popover-root',
  styleUrls: ['./system-alert.component.less'],
  template: `
      <div class="popover">
          <button class="popover-close" (click)="closeAlert($event)">&times;</button>
          <h3 class="popover-title">{{title}}</h3>
          <div class="popover-content">{{content}}</div>
      </div>
  `
})
export class SytemAlert implements OnInit{

  title: string = 'Окно сообщений';
  style: any;

  constructor(private viewContainerRef: ViewContainerRef){
      this.style = this.viewContainerRef.element.nativeElement.style;
      this.style.display = `none`;
  }

  public showAlert(str:string){

      this.content = str;
      this.style.display = `block`;
  }

  public closeAlert(evt){
      this.style.display = `none`;
  }

  ngOnInit(){

  }

 @Input() content: string = 'Default content';
}
