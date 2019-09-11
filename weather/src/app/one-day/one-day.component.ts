import { Component, OnInit } from "@angular/core";
import { WeatherApiService } from "../weather-api.service";

@Component({
  selector: "app-one-day",
  templateUrl: "./one-day.component.html",
  styleUrls: ["./one-day.component.css"]
})
export class OneDayComponent implements OnInit {
  src: string = "";
  city: string;
  country: string;
  date = new Date();
  hour = this.date.getHours();
  minutes = this.min(this.date.getMinutes());
  temperature: number;
  wind: number;
  pressure: number;
  humidity: number;
  constructor(private http: WeatherApiService) {}
  min(min) {
    if (min < 10) {
      return (min = "0" + min);
    } else {
      return min;
    }
  }
  ngOnInit() {
    this.http.city.subscribe(data => {
      this.city = data;
      this.day();
    });
  }
  lTemp(temp) {
    return Math.floor(temp - 273.15);
  }
  km(wind) {
    return Math.ceil((wind * 3600) / 1000);
  }

  day() {
    this.http.getDay(this.city).subscribe(data => {
      this.country = data.sys.country;
      this.temperature = this.lTemp(data.main.temp_max);
      this.wind = this.km(data.wind.speed);
      this.pressure = data.main.pressure;
      this.humidity = data.main.humidity;
      if (data.weather[0].description === "clear sky") {
        this.src = "./../../assets/animated/day.svg";
      } else if (data.weather[0].description === "few clouds") {
        this.src = "./../../assets/animated/cloudy-day-1.svg";
      } else if (data.weather[0].description === "scattered clouds") {
        this.src = "./../../assets/animated/cloudy-day-3.svg";
      } else if (data.weather[0].description === "broken clouds") {
        this.src = "./../../assets/animated/cloudy.svg";
      } else if (data.weather[0].description === "rain") {
        this.src = "./../../assets/animated/rainy-3.svg";
      } else if (data.weather[0].description === "shower rain") {
        this.src = "./../../assets/animated/rainy-7.svg";
      } else if (data.weather[0].description === "thunderstorm") {
        this.src = "./../../assets/animated/thunder.svg";
      } else if (data.weather[0].description === "snow") {
        this.src = "./../../assets/animated/snowy-6.svg";
      } else if (data.weather[0].description === "overcast clouds") {
        this.src = "./../../assets/animated/cloudy.svg";
      } else if (
        data.weather[0].description === "light intensity drizzle" ||
        data.weather[0].description === "drizzle" ||
        data.weather[0].description === "heavy intensity drizzle" ||
        data.weather[0].description === "light intensity drizzle rain" ||
        data.weather[0].description === "drizzle rain" ||
        data.weather[0].description === "heavy intensity drizzle rain" ||
        data.weather[0].description === "shower rain and drizzle" ||
        data.weather[0].description === "heavy shower rain and drizzle" ||
        data.weather[0].description === "shower drizzle" ||
        data.weather[0].description === "light intensity shower rain" ||
        data.weather[0].description === "heavy intensity shower rain" ||
        data.weather[0].description === "ragged shower rain"
      ) {
        this.src = "./../../assets/animated/rainy-3.svg";
      } else if (
        data.weather[0].description === "light rain" ||
        data.weather[0].description === "moderate rain" ||
        data.weather[0].description === "heavy intensity rain" ||
        data.weather[0].description === "	very heavy rain" ||
        data.weather[0].description === "extreme rain"
      ) {
        this.src = "./../../assets/animated/rainy-7.svg";
      } else if (
        data.weather[0].description === "thunderstorm with light rain" ||
        data.weather[0].description === "thunderstorm with rain" ||
        data.weather[0].description === "thunderstorm with heavy rain" ||
        data.weather[0].description === "light thunderstorm" ||
        data.weather[0].description === "heavy thunderstorm" ||
        data.weather[0].description === "ragged thunderstorm" ||
        data.weather[0].description === "thunderstorm with light drizzle" ||
        data.weather[0].description === "thunderstorm with drizzle" ||
        data.weather[0].description === "thunderstorm with heavy drizzle"
      ) {
        this.src = "./../../assets/animated/thunder.svg";
      } else if (
        data.weather[0].description === "light snow" ||
        data.weather[0].description === "freezing rain" ||
        data.weather[0].description === "Snow" ||
        data.weather[0].description === "Heavy snow" ||
        data.weather[0].description === "Sleet" ||
        data.weather[0].description === "Light shower sleet" ||
        data.weather[0].description === "Shower sleet" ||
        data.weather[0].description === "Light rain and snow" ||
        data.weather[0].description === "Rain and snow" ||
        data.weather[0].description === "Light shower snow" ||
        data.weather[0].description === "Shower snow" ||
        data.weather[0].description === "Heavy shower snow"
      ) {
        this.src = "./../../assets/animated/snowy-6.svg";
      }
    });
  }
  add(event) {
    if (event.keyCode == 13) {
      this.day();
      this.http.send(this.city);
    }
  }
  clear(e) {
    e.target.value = "";
  }
}
