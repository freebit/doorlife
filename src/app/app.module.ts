import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DoorLifeRoot } from './components/doorlife-root/doorlife-root.component';
import { InteriorListComponent } from './components/interior-list/interior-list.component';
import { DoorListComponent } from './components/door-list/door-list.component';

@NgModule({
  declarations: [
    DoorLifeRoot,
    InteriorListComponent,
    DoorListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DoorLifeRoot]
})
export class AppModule { }
