import { Component, OnInit } from '@angular/core';

import {ComunicationService} from '../services/comunication.service';

@Component({
  selector: 'app-grand-son-a',
  templateUrl: './grand-son-a.component.html',
  styleUrls: ['./grand-son-a.component.scss']
})
export class GrandSonAComponent implements OnInit {

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
