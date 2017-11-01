import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, MathJaxDirective} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatProgressSpinnerModule,
  MatTabsModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {AboutComponent} from "app/about/about.component";
import {HomeComponent} from './home/home.component';
import {LessonsComponent} from './lessons/lessons.component';
import {TeachersComponent} from './teachers/teachers.component';
import {PhotoComponent, PhotoDialogRouterSupport} from './photo/photo.component';
import {StudentsComponent} from './students/students.component';
import {AppRoutingModule} from './app.routing.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {PhotoDialogComponent} from "./photo/photo.dialog.component";
import {MarkdownModule} from 'angular2-markdown';

@NgModule({
  declarations: [
    AppComponent,

    AboutComponent,
    HomeComponent,
    LessonsComponent,
    TeachersComponent,
    PhotoComponent,
    StudentsComponent,

    PhotoDialogComponent,
    PhotoDialogRouterSupport,

    MathJaxDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    MatTabsModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,

    MarkdownModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    PhotoDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
