import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpService } from './services/http.service';

import { DoorLifeRoot } from './components/doorlife-root/doorlife-root.component';
import { InteriorListComponent } from './components/interior-list/interior-list.component';
import { DoorListComponent } from './components/door-list/door-list.component';
import { SytemAlert } from './components/ui/system-alert/system-alert.component';

import { AngularDraggableModule } from 'angular2-draggable';
import { ResizableModule } from 'angular-resizable-element';

import { EstetDoorImageComponent } from './components/estet-door-image/estet-door-image.component';

@NgModule({
  declarations: [
    DoorLifeRoot,
    InteriorListComponent,
    DoorListComponent,
    SytemAlert,
    EstetDoorImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularDraggableModule,
    ResizableModule
  ],
  providers: [HttpService],
  bootstrap: [DoorLifeRoot],

  entryComponents: [SytemAlert]
})

export class AppModule { }
