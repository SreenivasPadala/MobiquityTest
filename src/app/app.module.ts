import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { WeatherdetailsService } from './weatherdetails.service';
import { HttpClientModule } from '@angular/common/http';
import { FivedaysdetailsComponent } from './fivedaysdetails/fivedaysdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrylistComponent,
    FivedaysdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
