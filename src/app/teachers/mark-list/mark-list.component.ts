import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-mark-list',
  templateUrl: 'mark-list.component.html'
})
export class MarkListComponent implements OnInit {
  public path: string;
  public id: string;

  private routerSub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location) {

  }


  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.path = `/assets/teachers/mark-lists/marks${params['id']}.pdf`;
    })
  }

  back() {
    this.location.back();
  }
}
