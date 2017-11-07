import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: 'pdf.component.html'
})
export class PdfComponent {

  @Input()
  public source: string;

}
