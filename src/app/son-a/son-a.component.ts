import { Component, OnInit } from '@angular/core';
import {ComunicationService} from '../services/comunication.service';

@Component({
  selector: 'app-son-a',
  templateUrl: './son-a.component.html',
  styleUrls: ['./son-a.component.scss']
})
export class SonAComponent implements OnInit {

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
