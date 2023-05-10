import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-new-intent',
  templateUrl: './create-new-intent.component.html',
  styleUrls: ['./create-new-intent.component.css']
})
export class CreateNewIntentComponent {
  constructor(private _dialogRef: DialogRef<CreateNewIntentComponent>) { }

  close() {
    this._dialogRef.close()
  }
}
