import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Subscription} from 'rxjs/Subscription';
import {unsubscribe} from '../common/subscription';

export class AboutSection {
  public name: string;
  public content: string;
}

export class About {
  public content: string;
  public photo: string;
  public sections: AboutSection[];
}

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit, OnDestroy {

  public expandFirst = true;

  public constructor() { }

  ngOnInit(): void {

  }


  ngOnDestroy(): void {

  }
}
