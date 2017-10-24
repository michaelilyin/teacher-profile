import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'photo-dialog',
  templateUrl: 'photo.dialog.component.html',
  styleUrls: ['photo.dialog.component.css'],
})
export class PhotoDialogComponent {

  public url: string;

  constructor(
    public dialogRef: MatDialogRef<PhotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private db: AngularFireDatabase) {

    this.db.object(`/public/photo/${data}`).valueChanges().subscribe((obj: {url: string}) => {
      this.url = obj.url;
    });
  }



}
