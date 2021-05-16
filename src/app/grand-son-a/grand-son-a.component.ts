import {Component, OnInit} from '@angular/core';

import {ComunicationService} from '../services/comunication.service';

import { ViewChild } from '@angular/core';

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

  fontSize = 14;
  @ViewChild('para', {static: true}) para: ComunicationService;


  changeFont(operator){
    operator === '+' ? this.fontSize++ : this.fontSize--;
    document.getElementsByTagName('textarea')[0].style.fontSize = `${this.fontSize}px`;
  }

}
