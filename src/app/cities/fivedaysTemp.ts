export class FiveDays {
    public cityName :string;
    public dayTime : string;
    public temperature: number;

    constructor(cityName : string, dayTime : string,temperature: number) {
        this.cityName = cityName;
        this.dayTime = dayTime;
        this.temperature = temperature;
    }
}