import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PersonComponent }  from './person/person.component';
import { OwicPageComponent } from './owic/owic.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PersonComponent
    //  OwicPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
