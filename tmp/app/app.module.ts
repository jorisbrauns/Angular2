import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PersonListComponent } from './person/person-list.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        PersonListComponent
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
