import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule, MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {AboutComponent} from "app/about/about.component";
import {HomeComponent} from './home/home.component';
import {LessonsComponent} from './lessons/lessons.component';
import {TeachersComponent} from './teachers/teachers.component';
import {PhotoComponent} from './photo/photo.component';
import {StudentsComponent} from './students/students.component';
import {AppRoutingModule} from './app.routing.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LessonsComponent,
    TeachersComponent,
    PhotoComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
