import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/first';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Title} from '@angular/platform-browser';
import {ResolveEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  public ready = false;

  public links = [
    { label: 'Главная', path: 'home' },
    { label: 'Фото', path: 'photo' },
    { label: 'Обо мне', path: 'about' },
    { label: 'Родителям', path: 'parents' },
    { label: 'Ученикам', path: 'students' },
    { label: 'Конспекты', path: 'lessons' }
  ];

  private internalInitialize = new Subject<boolean>();
  private initSubscription: Subscription;

  constructor(db: AngularFireDatabase, router: Router, title: Title) {
    router.events.subscribe((event)=>{
      if (event instanceof ResolveEnd) {
        const resolveEnd = event as ResolveEnd;
        let state = resolveEnd.state.root;
        while (state.firstChild) {
          state = state.firstChild;
        }
        title.setTitle(state.data.title);
      }
    });

    const name = db.object('/public/name').valueChanges().first();
    this.initSubscription = Observable.zip(this.internalInitialize, name).subscribe(data => {
      this.ready = true;
      if (this.initSubscription) {
        this.initSubscription.unsubscribe();
      }
    });
  }

  ngAfterViewInit(): void {
    this.internalInitialize.next(true);
  }
}
