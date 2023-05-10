import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewIntentComponent } from '../modals/create-new-intent/create-new-intent.component';

@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.css']
})
export class IntentsComponent implements OnInit {

  data: any = [];

  constructor(private _dialog: MatDialog, private _service: ServiceService) { }

  openIntentModel() {
    this._dialog.open(CreateNewIntentComponent, {
      width: '600px',
    })
  }
  ngOnInit() {
    this._service.getAllData().subscribe({
      next: (response) => {
        this.data = response
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
