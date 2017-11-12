import {AfterViewInit, Component, Directive, ElementRef, Input, OnChanges} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/first';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Title} from '@angular/platform-browser';
import {ResolveEnd, Router} from '@angular/router';
import {MarkdownService} from 'angular2-markdown';

declare const MathJax: any;

@Directive({
  selector: '[mathjax]'
})
export class MathJaxDirective implements OnChanges {

  @Input("mathjax") private value: string = "";

  constructor(private element: ElementRef) {}

  ngOnChanges() {
    this.element.nativeElement.innerHTML = this.value;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.element.nativeElement]);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  public ready = false;

  public links = [
    {label: 'Главная', path: 'home'},
    {label: 'Обо мне', path: 'about'},
    {label: 'Учителям', path: 'teachers'},
    {label: 'Ученикам', path: 'students'},
    {label: 'Учебно-методическая литература', path: 'lessons'},
    {label: 'Контакты', path: 'contacts'},
  ];

  private internalInitialize = new Subject<boolean>();
  private initSubscription: Subscription;

  constructor(private _markdown: MarkdownService, db: AngularFireDatabase, router: Router, title: Title) {
    router.events.subscribe((event) => {
      if (event instanceof ResolveEnd) {
        const resolveEnd = event as ResolveEnd;
        let state = resolveEnd.state.root;
        while (state.firstChild) {
          state = state.firstChild;
        }
        if (state.data.title) {
          title.setTitle(state.data.title);
        }
      }
    });

    const name = db.object('/public/name').valueChanges().first();
    this.initSubscription = Observable.zip(this.internalInitialize, name).subscribe(() => {
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
