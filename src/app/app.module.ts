import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const ROUTES = [
];

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
