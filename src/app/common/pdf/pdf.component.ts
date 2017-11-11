import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: 'pdf.component.html'
})
export class PdfComponent {

  @Input()
  public source: string;

  @Output("after-load-complete")
  public afterLoadComplete = new EventEmitter();

  complete() {
    this.afterLoadComplete.next();
  }

}
