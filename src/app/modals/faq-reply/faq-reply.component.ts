import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-reply',
  templateUrl: './faq-reply.component.html',
  styleUrls: ['./faq-reply.component.css']
})
export class FaqReplyComponent {
  constructor(private _dialogRef: DialogRef<FaqReplyComponent>) { }

  close() {
    this._dialogRef.close()
  }
}
