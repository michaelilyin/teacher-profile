import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {
  balloonHeader = 'МБОУ СОШ №37';
  balloonBody = '<img class="page_avatar_img" src="/assets/images/mbou_sosh_37.jpg" alt="МБОУ СОШ №37" width="200" height="200">';
  balloonFooter = '';

  constructor() { }


  ngOnInit(): void {

  }


  ngOnDestroy(): void {

  }

}
