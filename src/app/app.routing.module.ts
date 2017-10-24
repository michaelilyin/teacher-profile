import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from "app/about/about.component";
import {PhotoComponent} from './photo/photo.component';
import {TeachersComponent} from './teachers/teachers.component';
import {StudentsComponent} from './students/students.component';
import {LessonsComponent} from './lessons/lessons.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: { title: 'Анастасия Попова' } },
  {path: 'photo', component: PhotoComponent, data: { title: 'Фото' } },
  {path: 'about', component: AboutComponent, data: { title: 'Обо мне' } },
  {path: 'teachers', component: TeachersComponent, data: { title: 'Информация для учителей' } },
  {path: 'students', component: StudentsComponent, data: { title: 'Информация для учеников' } },
  {path: 'lessons', component: LessonsComponent, data: { title: 'Учебно-методическая литература' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
