import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html'
})
export class ListsComponent {

  constructor(private location: Location) {

  }

  back() {
    this.location.back();
  }
}
