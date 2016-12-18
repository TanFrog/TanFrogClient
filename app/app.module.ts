import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { StudentListComponent } from './student-list.component';
import { SessionMosiacComponent } from './session-mosiac.component';
import { FormsModule } from '@angular/forms';
import { SessionComponent } from './session.component';

import { AppComponent }  from './app.component';
import './rxjs-operators';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    StudentListComponent,
    SessionMosiacComponent,
    SessionComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
