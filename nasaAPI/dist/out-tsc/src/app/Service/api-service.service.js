var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http) {
        this.http = http;
    }
    ApiServiceService.prototype.getNasaImage = function (data) {
        var day = data.getDate();
        var month = data.getMonth() + 1;
        var year = data.getFullYear();
        var apiKey = 'j5h6lz0gD3dgwSawqhE00Zp3xuoXN8t6BAkcrRMa';
        var apodUrl = "https://api.nasa.gov/planetary/apod?date=" + year + "-" + month + "-" + day + "&api_key=" + apiKey + "&hd=true";
        return this.http.get(apodUrl);
    };
    ApiServiceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ApiServiceService);
    return ApiServiceService;
}());
export { ApiServiceService };
//# sourceMappingURL=api-service.service.js.map