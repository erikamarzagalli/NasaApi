var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiServiceService } from './Service/api-service.service';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LastDateComponent } from './last-date/last-date.component';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LastDateComponent,
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                MatNativeDateModule,
                ReactiveFormsModule,
                MatDatepickerModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule,
                MatButtonModule
            ],
            providers: [
                ApiServiceService,
                DatePipe,
                {
                    provide: DateAdapter, useClass: AppDateAdapter
                },
                {
                    provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
                }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map