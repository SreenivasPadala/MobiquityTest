import { Component, OnInit } from '@angular/core';
import { WeatherdetailsService } from '../weatherdetails.service';

@Component({
  selector: 'app-fivedaysdetails',
  templateUrl: './fivedaysdetails.component.html',
  styleUrls: ['./fivedaysdetails.component.scss']
})
export class FivedaysdetailsComponent implements OnInit {
  fiveDaysList = [];
  cityName : string;
  constructor(private weatherDtls: WeatherdetailsService) { }

  ngOnInit(): void {
     this.fiveDaysList = this.weatherDtls.getFiveDaysItems();
     this.cityName = this.weatherDtls.cityName;
     console.log(this.fiveDaysList);
     localStorage.clear();
  }

}
