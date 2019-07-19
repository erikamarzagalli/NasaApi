var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ApiServiceService } from './Service/api-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
var AppComponent = /** @class */ (function () {
    function AppComponent(nasaApi, sanitizer, datePipe) {
        this.nasaApi = nasaApi;
        this.sanitizer = sanitizer;
        this.datePipe = datePipe;
        this.title = 'PIC OF THE DAY';
        this.day = new Date();
        this.nasaImgObj = '';
        this.maxDate = new Date();
        this.minDate = '1995-06-16';
        this.lastDay = new Array();
        console.log('anh ', ' ' + datePipe.transform(this.day.setDate(this.day.getDate() + 7)));
        this.date = new FormControl(this.datePipe.transform(this.day.setDate(this.day.getDate() + 7)));
        console.log('anht', ' ' + new Date());
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nasaApi.getNasaImage(new Date()).subscribe(function (response) {
            _this.nasaImgObj = response;
            console.log(response);
        });
    };
    AppComponent.prototype.dateChange = function (date) {
        var _this = this;
        this.nasaApi.getNasaImage(date.value).subscribe(function (response) {
            _this.nasaImgObj = response;
            console.log(response);
        });
    };
    AppComponent.prototype.goToday = function () {
        var _this = this;
        this.nasaApi.getNasaImage(new Date()).subscribe(function (response) {
            _this.nasaImgObj = response;
            console.log(response);
        });
    };
    AppComponent.prototype.sanetizeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    AppComponent.prototype.lastDateChange = function (response) {
        this.nasaImgObj = response;
    };
    AppComponent = __decorate([
        Component({
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
        }),
        __metadata("design:paramtypes", [ApiServiceService, DomSanitizer, DatePipe])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map