import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TerritoryDetailsComponent } from './territories/territory-details/territory-details.component';
import { TerritoryListComponent } from './territories/territory-list/territory-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TerritoryDetailsComponent,
    TerritoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
