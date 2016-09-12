import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PersonListComponent }  from './person/person-list.component';
import { OwicPageComponent } from './owic/owic.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PersonListComponent,
    OwicPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
