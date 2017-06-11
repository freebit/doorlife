import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../services/http.service";
import { Door } from '../../types/Door';
import { Collection } from '../../types/Collection';

@Component({
  selector: 'app-door-list',
  templateUrl: './door-list.component.html',
  styleUrls: ['./door-list.component.less']
})
export class DoorListComponent implements OnInit {

  collections: Collection[] = [];
  doors: Door[] = [];
  error:any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getCollections().subscribe(

        data => {
            //this.collections = data
        },

        error => {
          this.error = error;
          console.log(error);
        }
    )
  }

}
