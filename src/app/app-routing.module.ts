import { FivedaysdetailsComponent } from './fivedaysdetails/fivedaysdetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountrylistComponent } from './countrylist/countrylist.component';


const routes: Routes = [
  {
    path : "countryList",
    component : CountrylistComponent,
  },
  {
    path : "fiveDaysList",
    component : FivedaysdetailsComponent
  },
  {path : "", redirectTo : "/countryList", pathMatch : "full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
