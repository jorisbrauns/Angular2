import * as app                    from './';
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { PersonComponent }          from './person';

@NgModule({
  imports: [
    BrowserModule,
    app.Routing,
    FormsModule
  ],
  declarations: [
    app.AppComponent,
    PersonComponent
  ],
  bootstrap: [app.AppComponent]
})
export class AppModule { }
