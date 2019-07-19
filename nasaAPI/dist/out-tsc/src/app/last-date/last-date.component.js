var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { ApiServiceService } from '../Service/api-service.service';
var LastDateComponent = /** @class */ (function () {
    function LastDateComponent(nasaApi) {
        this.nasaApi = nasaApi;
        this.lastDateChange = new EventEmitter();
        this.maxDate = new Date();
        this.lastDay = new Array();
    }
    LastDateComponent.prototype.ngOnInit = function () {
        for (var index = 0; index < 30; index++) {
            this.maxDate.setDate(this.maxDate.getDate() - 1);
            this.lastDay[index] = this.maxDate.toLocaleDateString();
            console.log(this.lastDay[index]);
        }
    };
    LastDateComponent.prototype.onClickMe = function (date) {
        var _this = this;
        console.log(date);
        var d = date.split('/')[0];
        var m = date.split('/')[1];
        var y = date.split('/')[2];
        this.nasaApi.getNasaImage(new Date(+y, +m - 1, +d)).subscribe(function (response) {
            _this.lastDateChange.emit(response);
            console.log(response);
        });
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LastDateComponent.prototype, "lastDateChange", void 0);
    LastDateComponent = __decorate([
        Component({
            selector: 'app-last-date',
            templateUrl: './last-date.component.html',
            styleUrls: ['./last-date.component.css'],
            providers: []
        }),
        __metadata("design:paramtypes", [ApiServiceService])
    ], LastDateComponent);
    return LastDateComponent;
}());
export { LastDateComponent };
//# sourceMappingURL=last-date.component.js.map