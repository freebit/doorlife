import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/fromEvent';

@Directive({
  selector: '[draggable]',
  host:{
    //'(mousedown)': 'onMouseDown($event)',
    //'(document:mouseup)': 'onMouseUp($event)',
    //'(document:mousemove)': 'onMouseMove($event)',

    //'(touchenter)': 'onMouseEnter($event)',
    '(mouseenter)': 'onMouseEnter($event)'
  }
})
export class DraggableDirective {

  @Output() testus: Observable<{}>;

  @Output() mousedrag: Observable<MouseEvent>;
  @Output() dragend = new EventEmitter<void>();
  mousedown = new EventEmitter<MouseEvent>();
  mousemove = new EventEmitter<MouseEvent>();
  dragActive = false;

  constructor() {
    // this.mousedrag = this.mousedown.map((event) => {
    //   this.dragActive = true;
    //   return { x: event.clientX, y: event.clientY };
    // })
    // .flatMap(mouseDownPos => this.mousemove.map(pos => {
    //   return { x: pos.clientX - mouseDownPos.x, y: pos.clientY - mouseDownPos.y };
    // }).takeUntil(this.dragend))

    this.testus = Observable.fromEvent(document,'mousemove')
        .filter((k:any) => this.isSuportedCharacter(k.which))
        .map((k:any) => {
          return {operation:'modify', element:k};
        });

    this.testus.subscribe(
        data => console.log('data - ', data),
        error => console.log('error - ', error)
    )
  }

  isSuportedCharacter(keyCode:number){
    return true;
  }

  onMouseEnter(event){
    //debugger
  }

  onMouseDown(event){
    this.mousedown.emit(event);
  }

  onMouseUp(event){
    if(this.dragActive) {
      this.dragend.emit(null);
      this.dragActive = false;
    }
  }

  onMouseMove(event){
    if(this.dragActive) {
      this.mousemove.emit(event);
      return false;
    }
  }

}
