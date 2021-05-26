import { Component, OnInit } from '@angular/core';
import {ComunicationService} from '../services/comunication.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['../app.component.scss']
})
export class FatherComponent implements OnInit {

  message: string;

  constructor(public cs: ComunicationService) { }

  ngOnInit(): void {
  }

  getChange() {
    this.message = this.cs.message;
  }

}
