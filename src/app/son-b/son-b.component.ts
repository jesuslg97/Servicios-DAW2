import { Component, OnInit } from '@angular/core';
import {ComunicationService} from '../services/comunication.service';

@Component({
  selector: 'app-son-b',
  templateUrl: './son-b.component.html',
  styleUrls: ['./son-b.component.scss']
})
export class SonBComponent implements OnInit {

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
