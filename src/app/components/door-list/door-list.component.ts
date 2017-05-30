import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../services/http.service";
import { Door } from '../../types/Door';

@Component({
  selector: 'app-door-list',
  templateUrl: './door-list.component.html',
  styleUrls: ['./door-list.component.less']
})
export class DoorListComponent implements OnInit {

  doors: Door[] = [];
  error:any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getDoors().subscribe(

        data => this.doors = data,

        error => {
          this.error = error;
          console.log(error);
        }
    )
  }

}
