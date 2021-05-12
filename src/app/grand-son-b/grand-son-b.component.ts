import { Component, OnInit } from '@angular/core';

import {ComunicationService} from '../services/comunication.service';

@Component({
  selector: 'app-grand-son-b',
  templateUrl: './grand-son-b.component.html',
  styleUrls: ['./grand-son-b.component.scss']
})
export class GrandSonBComponent implements OnInit {

  message: string;

  constructor(private cs: ComunicationService) { }

  ngOnInit(): void {
    this.cs.sendMessageObservable.subscribe(response => {
      this.message = response;
    });
  }

  changeText(message: string) {
    this.cs.sendMessage(message);
  }

}
