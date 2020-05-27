import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompDefaultComponent } from './comp-default/comp-default.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleService } from './people.service';

@NgModule({
  declarations: [
    AppComponent,
    CompTwoComponent,
    CompOneComponent,
    CompDefaultComponent,
    PeopleListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
