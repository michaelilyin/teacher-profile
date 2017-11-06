import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AngularFireDatabase} from 'angularfire2/database';
import {Keyable, mapListKeys} from '../common/keyable';
import {Photo} from './photo.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'photo-dialog',
  templateUrl: 'photo.dialog.component.html',
  styleUrls: ['photo.dialog.component.css'],
})
export class PhotoDialogComponent {

  public url: string;

  constructor(
    public router: Router,
    public  location: Location,
    public dialogRef: MatDialogRef<PhotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private db: AngularFireDatabase) {

    this.db.object(`/public/photo/${data}`).valueChanges().subscribe((obj: {url: string}) => {
      this.url = obj.url;
    });
  }

  loadPrevImage(): void {
    this.db.list(`/public/photo`, ref => ref.endAt(null, this.data).limitToLast(2))
      // .snapshotChanges().subscribe(console.info);
      .snapshotChanges().map(mapListKeys).subscribe(
        (obj: Keyable<Photo>[]) => {
          const nextPhoto = obj.find(photo => photo.key !== this.data);
          this.location.go(`/photo/${nextPhoto.key}`);
          this.url = nextPhoto.data.url;
          this.data = nextPhoto.key;
        });
  }

  loadNextImage(): void {
    this.db.list(`/public/photo`, ref => ref.startAt(null, this.data).limitToFirst(2))
    // .snapshotChanges().subscribe(console.info);
      .snapshotChanges().map(mapListKeys).subscribe(
      (obj: Keyable<Photo>[]) => {
        const nextPhoto = obj.find(photo => photo.key !== this.data);
        this.location.go(`/photo/${nextPhoto.key}`);
        this.url = nextPhoto.data.url;
        this.data = nextPhoto.key;
      });
  }



}
