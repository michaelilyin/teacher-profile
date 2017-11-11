import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pdf-page',
  templateUrl: 'pdf-page.component.html'
})
export class PdfPageComponent implements OnInit {
  public path: string;
  public downloadPath: string;
  public id: string;

  public complete = false;

  private routerSub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location) {

  }


  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      const group = params['group'];
      const type = params['type'];
      this.path = `/assets/files/${group}/${params['id']}.pdf`;
      this.downloadPath = `/assets/files/${group}/${params['id']}.${type}`;
    })
  }

  completed() {
    this.complete = true;
  }

  back() {
    this.location.back();
  }
}

@Component({
  selector: 'app-pdf-page-referencer-list-item',
  template: `
    <mat-list-item>
      <mat-icon mat-list-icon *ngIf="icon">{{icon}}</mat-icon>
      <h4 mat-line>{{title}}</h4>
      <div mat-line>
        <a routerLink="/files/{{group}}/{{file}}/{{type}}">Просмотр</a> <a href="/assets/files/{{group}}/{{file}}.{{type}}" target="_blank">Загрузка</a>
      </div>
    </mat-list-item>
  `
})
export class PdfPageReferencerListItemComponent {

  @Input()
  public icon: string;

  @Input()
  public title: string;

  @Input()
  public group: string;

  @Input()
  public file: string;

  @Input()
  public type = 'docx';
}
