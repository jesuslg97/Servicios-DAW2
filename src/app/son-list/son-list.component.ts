import { Component, OnInit } from '@angular/core';
import {ComunicationService} from '../services/comunication.service';

@Component({
  selector: 'app-son-list',
  templateUrl: './son-list.component.html',
  styleUrls: ['../app.component.scss']
})
export class SonListComponent implements OnInit {

  message: string;

  constructor(public cs: ComunicationService) { }

  ngOnInit(): void {
  }

  getChange() {
    this.message = this.cs.message;
  }

}
