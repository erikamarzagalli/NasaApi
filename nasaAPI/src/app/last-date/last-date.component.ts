import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiServiceService } from '../Service/api-service.service';
import { timer, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-last-date',
  templateUrl: './last-date.component.html',
  styleUrls: ['./last-date.component.css'],
  providers: []
})
export class LastDateComponent implements OnInit {
  @Output() lastDateChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() playDateChange: EventEmitter<any> = new EventEmitter<any>();

  maxDate = new Date();
  lastDay = new Array();
  i = -1;
  onNow: boolean;

  numbers: Observable<number> = timer(0, 5000);
  numbersSub: Subscription;


  constructor(private nasaApi: ApiServiceService) { }

  ngOnInit() {
    for (let index = 0; index < 30; index++) {
      this.maxDate.setDate(this.maxDate.getDate() - 1);
      this.lastDay[index] = this.maxDate.toLocaleDateString();
      console.log(this.lastDay[index]);
    }
  }

  onClickMe(date: string) {
    this.onNow = false;
    this.i = -1;
    this.numbersSub.unsubscribe();
    console.log(date);
    const d = date.split('/')[0];
    const m = date.split('/')[1];
    const y = date.split('/')[2];
    this.nasaApi.getNasaImage(new Date(+y, +m - 1, +d)).subscribe(response => {
      this.lastDateChange.emit(response);
      console.log(response);
    });
  }

  getPhoto(date: string) {
    const d = date.split('/')[0];
    const m = date.split('/')[1];
    const y = date.split('/')[2];
    this.nasaApi.getNasaImage(new Date(+y, +m - 1, +d)).subscribe(response => {
      this.lastDateChange.emit(response);
      console.log(response);
    });
  }

  playDate() {
    this.onNow = true;

    this.numbersSub = this.numbers.subscribe(x => {
      if (this.onNow) {
        this.i = (this.i + 1) % 30;
        console.log(this.getPhoto(this.lastDay[this.i]));
      }
    });


  }



}


