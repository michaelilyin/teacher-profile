import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {MatDialog} from "@angular/material";
import {PhotoDialogComponent} from "./photo.dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {AngularFireDatabase} from "angularfire2/database";
import {Keyable, mapListKeys} from '../common/keyable';

export class Photo {
  url: string;
}

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  public images: Array<Keyable<Photo>> = [];

  constructor(private router: Router,
              private db: AngularFireDatabase) {
    this.db.list<Photo>('/public/photo').snapshotChanges()
      .map(mapListKeys)
      .subscribe(photos => {
        this.images = photos;
      });
  }

  public onSelect(key) {
    this.router.navigate(['photo', key])
  }

}

@Component({
  selector: 'photo-dialog-router-support',
  template: '<div></div>'
})
export class PhotoDialogRouterSupport implements OnInit, OnDestroy {

  private routerSub: Subscription;
  private dialogSub: Subscription;

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private viewContainerRef: ViewContainerRef) {

  }


  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe(params => {
      const ref = this.dialog.open(PhotoDialogComponent, {
        viewContainerRef: this.viewContainerRef,
        data: params['id']
      });
      this.dialogSub = ref.afterClosed().subscribe(() => {
        this.router.navigate(['photo']);
      })
    })
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.dialogSub.unsubscribe();
  }
}
