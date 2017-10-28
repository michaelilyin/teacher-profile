import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  public expandFirst = true;

  public constructor(private db: AngularFireDatabase) {

  }
}
