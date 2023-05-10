import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewIntentComponent } from '../modals/create-new-intent/create-new-intent.component';
import { FaqReplyComponent } from '../modals/faq-reply/faq-reply.component';
import { ServiceService } from '../service.service';

@Component({
  templateUrl: './train-bot.component.html',
  styleUrls: ['./train-bot.component.css']
})
export class TrainBotComponent implements OnInit {

  cards: any = [];

  constructor(private _dialog: MatDialog, private _service: ServiceService) { }

  openIntentModel() {
    this._dialog.open(CreateNewIntentComponent, {
      width: '600px',
    })
  }
  openFaqModel() {
    this._dialog.open(FaqReplyComponent, {
      width: '600px',
    })
  }

  ngOnInit() {
    this._service.getAllData().subscribe({
      next: (response) => {
        this.cards = response
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
