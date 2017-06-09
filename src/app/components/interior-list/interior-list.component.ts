import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from "../../services/http.service";
import { Response } from '@angular/http';

import { Interior } from "../../types/Interior";

@Component({
  selector: 'app-interior-list',
  templateUrl: './interior-list.component.html',
  styleUrls: ['./interior-list.component.less']
})
export class InteriorListComponent implements OnInit {

  interiors: Interior[] = [];
  error:any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getInteriors().subscribe(

        data => {
            this.interiors = data;
            this.fetchEmmit(data);

        },

        error => {
          this.error = error;
          console.log(error);
        }
    )
  }

  @Output() onFetch = new EventEmitter<boolean>();

  fetchEmmit(data) {
     this.onFetch.emit(data);
  }

}
