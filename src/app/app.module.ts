import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

import { ApiService } from './services/api.service';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { DataService } from './services/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, Com1Component, Com2Component ],
  bootstrap:    [ AppComponent ],
  providers: [ ApiService, DataService, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true, } ]
})
export class AppModule { }
