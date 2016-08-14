import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { Team4TalentComponent }     from './team4talent/team4talent.component';
import { PersonComponent }          from './person/person.component';
import { AppComponent }             from './app.component';
import { Routing }                  from './app.routing';
import { PersonService }            from './person/person.service';

@NgModule({
  imports: [
    BrowserModule,
    Routing,
    FormsModule
  ],
  providers: [
    PersonService
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    Team4TalentComponent,
    PersonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
