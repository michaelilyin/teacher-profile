import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from "app/about/about.component";
import {PhotoComponent} from './photo/photo.component';
import {ParentsComponent} from './parents/parents.component';
import {StudentsComponent} from './students/students.component';
import {LessonsComponent} from './lessons/lessons.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: { title: 'Попова Анастасия' } },
  {path: 'photo', component: PhotoComponent, data: { title: 'Фото' } },
  {path: 'about', component: AboutComponent, data: { title: 'Обо мне' } },
  {path: 'parents', component: ParentsComponent, data: { title: 'Информация для родителей' } },
  {path: 'students', component: StudentsComponent, data: { title: 'Информация для учеников' } },
  {path: 'lessons', component: LessonsComponent, data: { title: 'Конспекты уроков' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
