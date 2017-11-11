import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from 'app/about/about.component';
import {ContactsComponent} from './photo/photo.component';
import {TeachersComponent} from './teachers/teachers.component';
import {StudentsComponent} from './students/students.component';
import {LessonsComponent} from './lessons/lessons.component';
import {PdfPageComponent} from './common/pdf-page/pdf-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: { title: 'Анастасия Попова' } },
  {path: 'about', component: AboutComponent, data: { title: 'Обо мне' } },
  {
    path: 'teachers',
    component: TeachersComponent,
    data: { title: 'Информация для учителей' }
  },
  {
    path: 'files/:group/:id',
    component: PdfPageComponent,
    data: { title: 'Документ' }
  },
  {path: 'students', component: StudentsComponent, data: { title: 'Информация для учеников' } },
  {path: 'lessons', component: LessonsComponent, data: { title: 'Учебно-методическая литература' }},
  {path: 'contacts', component: ContactsComponent, data: { title: 'Контакты' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
