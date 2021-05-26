import {Component, OnInit, ViewChild} from '@angular/core';
import {ComunicationService} from '../services/comunication.service';

@Component({
  selector: 'app-son-a',
  templateUrl: './son-a.component.html',
  styleUrls: ['./son-a.component.scss']
})
export class SonAComponent implements OnInit {

  message: string;

  colorFont: string[] = [
    'lightcoral',
    'lightgreen',
    'lightpink',
    'lightgray',
    'lightsalmon',
    'White'
  ];

  color: string;

  constructor(private cs: ComunicationService) { }

  ngOnInit(): void {
    this.cs.sendMessageObservable.subscribe(response => {
      this.message = response;
    });
  }

  changeText(message: string) {
    this.cs.sendMessage(message);
  }

  changeColorFont(value){
    this.color = value;
  }

  fontSize = 14;
  @ViewChild('para', {static: true}) para: ComunicationService;

  changeFont(operator){
    operator === '+' ? this.fontSize++ : this.fontSize--;
    document.getElementsByTagName('textarea')[0].style.fontSize = `${this.fontSize}px`;
  }

}
