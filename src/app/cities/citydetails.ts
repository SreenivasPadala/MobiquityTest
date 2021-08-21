import { City } from "./cities";

export class CityDetails {
    public cities: City[]

    constructor(cities: City[]) {
        this.cities = cities;
    }
}