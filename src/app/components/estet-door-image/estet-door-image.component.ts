import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'estet-door',
  templateUrl: './estet-door-image.component.html',
  styleUrls: ['./estet-door-image.component.less']
})
export class EstetDoorImageComponent implements OnInit {

  imageUri: string = 'http://estetdveri.ru/images/perfect/p1/perfect_p1_n_moon.jpg';
  private button: HTMLButtonElement;

  constructor() { }

  ngOnInit() {

  }

  onClick(evt){

    if(window['freeb'] && window['freeb']['doorlife']){
      window['freeb']['doorlife'].open(this.imageUri);
    }

  }

}
