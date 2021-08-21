import { FiveDays } from './../cities/fivedaysTemp';
import { WeatherdetailsService } from './../weatherdetails.service';
import { City } from './../cities/cities';
import { Component, OnInit } from '@angular/core';
import { CityDetails } from '../cities/citydetails';
import { CityItem } from '../cities/cityitem';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.scss'],
})
export class CountrylistComponent implements OnInit {
  countries: any;
  //countryItems = [];
  fiveDays = [];

  cities = [
    { cityName: 'Paris' },
    {
      cityName: 'London',
    },
    {
      cityName: 'Berlin',
    },
    { cityName: 'Roma' },
    { cityName: 'Kiev' },
  ];

  constructor(private weatherDtls: WeatherdetailsService,private route: ActivatedRoute, private _router: Router,) {}

  ngOnInit(): void {
    this.onLoadCitiesList(this.cities);
    this.getCountriesList();
  }

  onLoadCitiesList(cityDtls): void {
    this.weatherDtls.clearCityItems();
    for (let i = 0; i < cityDtls.length; i++) {
      this.weatherDtls
        .getCountriesInfo(cityDtls[i].cityName)
        .subscribe((data) => {
          let cityName: string = data.name;
          let cityTemperature: number = +data.main.temp_min;
          let sunriseTime = new Date(1000*data.sys.sunrise).toUTCString();
          let sunsetTime = new Date(1000*data.sys.sunset).toUTCString();
          const cityItem = new CityItem(
            cityName,
            cityTemperature,
            sunriseTime,
            sunsetTime
          );
          this.weatherDtls.addCityItem(cityItem);
        });
    }

    // this.getCountriesList();
  }

  getCountriesList() {
    this.countries = [];
    this.countries = this.weatherDtls.getCityItems();
  }

  showTemp(city){
    this.weatherDtls.cityName = city;
    this.weatherDtls.clearFiveDaysItems();
    this.weatherDtls
        .getFiveDaysInfo(city)
        .subscribe((data) => {
          for (let i = 0; i < data.list.length; i++) {
            if(data.list[i].dt_txt.split(" ")[1] == "09:00:00"){
              let cityName = city;
              let dayTime = data.list[i].dt_txt;
              let cityTemperature: number = +data.list[i].main.temp;
              const fiveDaysItem = new FiveDays(
                cityName,
                dayTime,
                cityTemperature
              );
              this.weatherDtls.addFiveDaysItem(fiveDaysItem);
            }
          }
        });

     console.log(this.fiveDays);
    //alert(city);
    this._router.navigate(['fiveDaysList']);
  }
}
