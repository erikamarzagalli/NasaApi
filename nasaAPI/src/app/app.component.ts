import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './Service/api-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from './DateFormat/date.adapter';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    DatePipe,
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class AppComponent implements OnInit {
  title = 'PIC OF THE DAY';

  day = new Date();
  public date;

  public nasaImgObj = '';
  maxDate = new Date();
  minDate = '1995-06-16';
  lastDay = new Array();

  constructor(private nasaApi: ApiServiceService, public sanitizer: DomSanitizer, private datePipe: DatePipe) {
    console.log('anh ', ' ' + datePipe.transform(this.day.setDate(this.day.getDate() + 7)));
    this.date = new FormControl(this.datePipe.transform(this.day.setDate(this.day.getDate() + 7)));
    console.log('anht', ' ' + new Date());
  }

  public ngOnInit() {
    this.nasaApi.getNasaImage(new Date()).subscribe(response => {
      this.nasaImgObj = response;
      console.log(response);
    });
  }

  public dateChange(date: any) {
    this.nasaApi.getNasaImage(date.value).subscribe(response => {
      this.nasaImgObj = response;
      console.log(response);
    });
  }

  goToday() {
    this.nasaApi.getNasaImage(new Date()).subscribe(response => {
      this.nasaImgObj = response;
      console.log(response);
    });
  }

  sanetizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  lastDateChange(response: any) {
    this.nasaImgObj = response;
  }

  playDate() {
  }


}
