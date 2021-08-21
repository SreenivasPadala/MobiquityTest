export class CityItem {
    public city: string;
    public temperature: number;
    public sunriseTime: number;
    public sunsetTime: number;


    constructor(city: string, temperature: number, sunriseTime,sunsetTime) {
        this.city = city;
        this.temperature = temperature;
        this.sunriseTime = sunriseTime;
        this.sunsetTime = sunsetTime;
    }
}