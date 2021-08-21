import { CityItem } from './cities/cityitem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CITY_ITEMS } from './cities/cityItems';
import { FiveDays } from './cities/fivedaysTemp';
import { FIVE_ITEMS } from './cities/fiveItem';

@Injectable({
  providedIn: 'root',
})
export class WeatherdetailsService {
  cityName : string;
  constructor(private http: HttpClient) {}

  getCountriesInfo(city: string): Observable<any> {
    const APPID = 'b2821528e1e5d5cb492681d30443ce7f';
    let url =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&APPID=' +
      APPID +
      '&units=metric';
    return this.http.get(url);
  }

  addCityItem(item: CityItem) {
    CITY_ITEMS.push(item);
  }

  getCityItems() {
    return CITY_ITEMS;
  }

  clearCityItems() {
    CITY_ITEMS.splice(0);
  }

  getFiveDaysInfo(city: string): Observable<any> {
    const APPID = 'b2821528e1e5d5cb492681d30443ce7f';
    let url =
      'https://api.openweathermap.org/data/2.5/forecast?q=' +
      city +
      '&APPID=' +
      APPID +
      '&units=metric';
    return this.http.get(url);
  }

  addFiveDaysItem(item: FiveDays) {
    FIVE_ITEMS.push(item);
  }

  getFiveDaysItems() {
    return FIVE_ITEMS;
  }

  clearFiveDaysItems() {
    FIVE_ITEMS.splice(0);
  }
  
}
