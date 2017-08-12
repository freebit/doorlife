import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from "../../services/http.service";
import { Door } from '../../types/Door';
import { Collection } from '../../types/Collection';
import { find } from 'lodash'

@Component({
  selector: 'app-door-list',
  templateUrl: './door-list.component.html',
  styleUrls: ['./door-list.component.less']
})
export class DoorListComponent implements OnInit {

  collections: Collection[] = [];
  doors: Door[] = [];
  error:any;

    @Output() onDoorSelect = new EventEmitter<string>();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getCollections().subscribe(

        data => {
            this.collections = data;
            this.getCollectionDoors(parseInt(this.collections[0].id));
        },

        error => {
          this.error = error;
          console.log(error);
        }
    )
  }

    getCollectionDoors(id:number){

     this.httpService.getDoorsByCollection(id).subscribe(

         data => {
             this.doors = data
         },

         error => {
             this.error = error;
             console.log(error);
         }
     )

    }


    selectDoor(doorId:number){
        let door = find(this.doors, ({id}) => id == doorId);
        this.onDoorSelect.emit(door.imgSrc);
    }

}
