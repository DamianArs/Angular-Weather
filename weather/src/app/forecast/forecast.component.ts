import { WeatherApiService } from "./../weather-api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.css"]
})
export class ForecastComponent implements OnInit {
  city: string;
  day1Temp: number;
  day2Temp: number;
  day3Temp: number;
  day4Temp: number;
  day5Temp: number;
  day1Src: string;
  day2Src: string;
  day3Src: string;
  day4Src: string;
  day5Src: string;
  data = new Date();
  first = new Date(this.data.setDate(this.data.getDate() + 1));
  second = new Date(this.data.setDate(this.data.getDate() + 1));
  third = new Date(this.data.setDate(this.data.getDate() + 1));
  fourth = new Date(this.data.setDate(this.data.getDate() + 1));
  fifth = new Date(this.data.setDate(this.data.getDate() + 1));
  lTemp(temp) {
    return Math.floor(temp - 273.15);
  }

  constructor(private http: WeatherApiService) {}

  ngOnInit() {
    this.http.city.subscribe(data => {
      this.city = data;
      this.forecast();
    });
  }
  forecast() {
    this.http.getForecast(this.city).subscribe(data => {
      this.day1Temp = this.lTemp(data.list[6].main.temp_max);

      if (data.list[6].weather[0].description === "clear sky") {
        this.day1Src = "./../../assets/animated/day.svg";
      } else if (data.list[6].weather[0].description === "few clouds") {
        this.day1Src = "./../../assets/animated/cloudy-day-1.svg";
      } else if (data.list[6].weather[0].description === "scattered clouds") {
        this.day1Src = "./../../assets/animated/cloudy-day-3.svg";
      } else if (
        data.list[6].weather[0].description === "broken clouds" ||
        data.list[6].weather[0].description === "overcast clouds"
      ) {
        this.day1Src = "./../../assets/animated/cloudy.svg";
      } else if (
        data.list[6].weather[0].description === "light intensity drizzle" ||
        data.list[6].weather[0].description === "drizzle" ||
        data.list[6].weather[0].description === "heavy intensity drizzle" ||
        data.list[6].weather[0].description ===
          "light intensity drizzle rain" ||
        data.list[6].weather[0].description === "drizzle rain" ||
        data.list[6].weather[0].description ===
          "heavy intensity drizzle rain" ||
        data.list[6].weather[0].description === "shower rain and drizzle" ||
        data.list[6].weather[0].description ===
          "heavy shower rain and drizzle" ||
        data.list[6].weather[0].description === "shower drizzle" ||
        data.list[6].weather[0].description === "light intensity shower rain" ||
        data.list[6].weather[0].description === "shower rain" ||
        data.list[6].weather[0].description === "heavy intensity shower rain" ||
        data.list[6].weather[0].description === "ragged shower rain" ||
        data.list[6].weather[0].description === "rain"
      ) {
        this.day1Src = "./../../assets/animated/rainy-3.svg";
      } else if (
        data.list[6].weather[0].description === "light rain" ||
        data.list[6].weather[0].description === "moderate rain" ||
        data.list[6].weather[0].description === "heavy intensity rain" ||
        data.list[6].weather[0].description === "	very heavy rain" ||
        data.list[6].weather[0].description === "extreme rain"
      ) {
        this.day1Src = "./../../assets/animated/rainy-7.svg";
      } else if (
        data.list[6].weather[0].description ===
          "thunderstorm with light rain" ||
        data.list[6].weather[0].description === "thunderstorm with rain" ||
        data.list[6].weather[0].description ===
          "thunderstorm with heavy rain" ||
        data.list[6].weather[0].description === "light thunderstorm" ||
        data.list[6].weather[0].description === "thunderstorm" ||
        data.list[6].weather[0].description === "heavy thunderstorm" ||
        data.list[6].weather[0].description === "ragged thunderstorm" ||
        data.list[6].weather[0].description ===
          "thunderstorm with light drizzle" ||
        data.list[6].weather[0].description === "thunderstorm with drizzle" ||
        data.list[6].weather[0].description ===
          "thunderstorm with heavy drizzle"
      ) {
        this.day1Src = "./../../assets/animated/thunder.svg";
      } else if (
        data.list[6].weather[0].description === "light snow" ||
        data.list[6].weather[0].description === "freezing rain" ||
        data.list[6].weather[0].description === "Snow" ||
        data.list[6].weather[0].description === "Heavy snow" ||
        data.list[6].weather[0].description === "Sleet" ||
        data.list[6].weather[0].description === "Light shower sleet" ||
        data.list[6].weather[0].description === "Shower sleet" ||
        data.list[6].weather[0].description === "Light rain and snow" ||
        data.list[6].weather[0].description === "Rain and snow" ||
        data.list[6].weather[0].description === "Light shower snow" ||
        data.list[6].weather[0].description === "Shower snow" ||
        data.list[6].weather[0].description === "Heavy shower snow" ||
        data.list[6].weather[0].description === "snow"
      ) {
        this.day1Src = "./../../assets/animated/snowy-6.svg";
      }

      this.day2Temp = this.lTemp(data.list[14].main.temp_max);

      if (data.list[14].weather[0].description === "clear sky") {
        this.day2Src = "./../../assets/animated/day.svg";
      } else if (data.list[14].weather[0].description === "few clouds") {
        this.day2Src = "./../../assets/animated/cloudy-day-1.svg";
      } else if (data.list[14].weather[0].description === "scattered clouds") {
        this.day2Src = "./../../assets/animated/cloudy-day-3.svg";
      } else if (
        data.list[14].weather[0].description === "broken clouds" ||
        data.list[14].weather[0].description === "overcast clouds"
      ) {
        this.day2Src = "./../../assets/animated/cloudy.svg";
      } else if (
        data.list[14].weather[0].description === "light intensity drizzle" ||
        data.list[14].weather[0].description === "drizzle" ||
        data.list[14].weather[0].description === "heavy intensity drizzle" ||
        data.list[14].weather[0].description ===
          "light intensity drizzle rain" ||
        data.list[14].weather[0].description === "drizzle rain" ||
        data.list[14].weather[0].description ===
          "heavy intensity drizzle rain" ||
        data.list[14].weather[0].description === "shower rain and drizzle" ||
        data.list[14].weather[0].description ===
          "heavy shower rain and drizzle" ||
        data.list[14].weather[0].description === "shower drizzle" ||
        data.list[14].weather[0].description ===
          "light intensity shower rain" ||
        data.list[14].weather[0].description === "shower rain" ||
        data.list[14].weather[0].description ===
          "heavy intensity shower rain" ||
        data.list[14].weather[0].description === "ragged shower rain" ||
        data.list[14].weather[0].description === "rain"
      ) {
        this.day2Src = "./../../assets/animated/rainy-3.svg";
      } else if (
        data.list[14].weather[0].description === "light rain" ||
        data.list[14].weather[0].description === "moderate rain" ||
        data.list[14].weather[0].description === "heavy intensity rain" ||
        data.list[14].weather[0].description === "	very heavy rain" ||
        data.list[14].weather[0].description === "extreme rain"
      ) {
        this.day2Src = "./../../assets/animated/rainy-7.svg";
      } else if (
        data.list[14].weather[0].description ===
          "thunderstorm with light rain" ||
        data.list[14].weather[0].description === "thunderstorm with rain" ||
        data.list[14].weather[0].description ===
          "thunderstorm with heavy rain" ||
        data.list[14].weather[0].description === "light thunderstorm" ||
        data.list[14].weather[0].description === "thunderstorm" ||
        data.list[14].weather[0].description === "heavy thunderstorm" ||
        data.list[14].weather[0].description === "ragged thunderstorm" ||
        data.list[14].weather[0].description ===
          "thunderstorm with light drizzle" ||
        data.list[14].weather[0].description === "thunderstorm with drizzle" ||
        data.list[14].weather[0].description ===
          "thunderstorm with heavy drizzle"
      ) {
        this.day2Src = "./../../assets/animated/thunder.svg";
      } else if (
        data.list[14].weather[0].description === "light snow" ||
        data.list[14].weather[0].description === "freezing rain" ||
        data.list[14].weather[0].description === "Snow" ||
        data.list[14].weather[0].description === "Heavy snow" ||
        data.list[14].weather[0].description === "Sleet" ||
        data.list[14].weather[0].description === "Light shower sleet" ||
        data.list[14].weather[0].description === "Shower sleet" ||
        data.list[14].weather[0].description === "Light rain and snow" ||
        data.list[14].weather[0].description === "Rain and snow" ||
        data.list[14].weather[0].description === "Light shower snow" ||
        data.list[14].weather[0].description === "Shower snow" ||
        data.list[14].weather[0].description === "Heavy shower snow" ||
        data.list[14].weather[0].description === "snow"
      ) {
        this.day2Src = "./../../assets/animated/snowy-6.svg";
      }

      this.day3Temp = this.lTemp(data.list[22].main.temp_max);

      if (data.list[22].weather[0].description === "clear sky") {
        this.day3Src = "./../../assets/animated/day.svg";
      } else if (data.list[22].weather[0].description === "few clouds") {
        this.day3Src = "./../../assets/animated/cloudy-day-1.svg";
      } else if (data.list[22].weather[0].description === "scattered clouds") {
        this.day3Src = "./../../assets/animated/cloudy-day-3.svg";
      } else if (
        data.list[22].weather[0].description === "broken clouds" ||
        data.list[22].weather[0].description === "overcast clouds"
      ) {
        this.day3Src = "./../../assets/animated/cloudy.svg";
      } else if (
        data.list[22].weather[0].description === "light intensity drizzle" ||
        data.list[22].weather[0].description === "drizzle" ||
        data.list[22].weather[0].description === "heavy intensity drizzle" ||
        data.list[22].weather[0].description ===
          "light intensity drizzle rain" ||
        data.list[22].weather[0].description === "drizzle rain" ||
        data.list[22].weather[0].description ===
          "heavy intensity drizzle rain" ||
        data.list[22].weather[0].description === "shower rain and drizzle" ||
        data.list[22].weather[0].description ===
          "heavy shower rain and drizzle" ||
        data.list[22].weather[0].description === "shower drizzle" ||
        data.list[22].weather[0].description ===
          "light intensity shower rain" ||
        data.list[22].weather[0].description === "shower rain" ||
        data.list[22].weather[0].description ===
          "heavy intensity shower rain" ||
        data.list[22].weather[0].description === "ragged shower rain" ||
        data.list[22].weather[0].description === "rain"
      ) {
        this.day3Src = "./../../assets/animated/rainy-3.svg";
      } else if (
        data.list[22].weather[0].description === "light rain" ||
        data.list[22].weather[0].description === "moderate rain" ||
        data.list[22].weather[0].description === "heavy intensity rain" ||
        data.list[22].weather[0].description === "	very heavy rain" ||
        data.list[22].weather[0].description === "extreme rain"
      ) {
        this.day3Src = "./../../assets/animated/rainy-7.svg";
      } else if (
        data.list[22].weather[0].description ===
          "thunderstorm with light rain" ||
        data.list[22].weather[0].description === "thunderstorm with rain" ||
        data.list[22].weather[0].description ===
          "thunderstorm with heavy rain" ||
        data.list[22].weather[0].description === "light thunderstorm" ||
        data.list[22].weather[0].description === "thunderstorm" ||
        data.list[22].weather[0].description === "heavy thunderstorm" ||
        data.list[22].weather[0].description === "ragged thunderstorm" ||
        data.list[22].weather[0].description ===
          "thunderstorm with light drizzle" ||
        data.list[22].weather[0].description === "thunderstorm with drizzle" ||
        data.list[22].weather[0].description ===
          "thunderstorm with heavy drizzle"
      ) {
        this.day3Src = "./../../assets/animated/thunder.svg";
      } else if (
        data.list[22].weather[0].description === "light snow" ||
        data.list[22].weather[0].description === "freezing rain" ||
        data.list[22].weather[0].description === "Snow" ||
        data.list[22].weather[0].description === "Heavy snow" ||
        data.list[22].weather[0].description === "Sleet" ||
        data.list[22].weather[0].description === "Light shower sleet" ||
        data.list[22].weather[0].description === "Shower sleet" ||
        data.list[22].weather[0].description === "Light rain and snow" ||
        data.list[22].weather[0].description === "Rain and snow" ||
        data.list[22].weather[0].description === "Light shower snow" ||
        data.list[22].weather[0].description === "Shower snow" ||
        data.list[22].weather[0].description === "Heavy shower snow" ||
        data.list[22].weather[0].description === "snow"
      ) {
        this.day3Src = "./../../assets/animated/snowy-6.svg";
      }

      this.day4Temp = this.lTemp(data.list[30].main.temp_max);

      if (data.list[30].weather[0].description === "clear sky") {
        this.day4Src = "./../../assets/animated/day.svg";
      } else if (data.list[30].weather[0].description === "few clouds") {
        this.day4Src = "./../../assets/animated/cloudy-day-1.svg";
      } else if (data.list[30].weather[0].description === "scattered clouds") {
        this.day4Src = "./../../assets/animated/cloudy-day-3.svg";
      } else if (
        data.list[30].weather[0].description === "broken clouds" ||
        data.list[30].weather[0].description === "overcast clouds"
      ) {
        this.day4Src = "./../../assets/animated/cloudy.svg";
      } else if (
        data.list[30].weather[0].description === "light intensity drizzle" ||
        data.list[30].weather[0].description === "drizzle" ||
        data.list[30].weather[0].description === "heavy intensity drizzle" ||
        data.list[30].weather[0].description ===
          "light intensity drizzle rain" ||
        data.list[30].weather[0].description === "drizzle rain" ||
        data.list[30].weather[0].description ===
          "heavy intensity drizzle rain" ||
        data.list[30].weather[0].description === "shower rain and drizzle" ||
        data.list[30].weather[0].description ===
          "heavy shower rain and drizzle" ||
        data.list[30].weather[0].description === "shower drizzle" ||
        data.list[30].weather[0].description ===
          "light intensity shower rain" ||
        data.list[30].weather[0].description === "shower rain" ||
        data.list[30].weather[0].description ===
          "heavy intensity shower rain" ||
        data.list[30].weather[0].description === "ragged shower rain" ||
        data.list[30].weather[0].description === "rain"
      ) {
        this.day4Src = "./../../assets/animated/rainy-3.svg";
      } else if (
        data.list[30].weather[0].description === "light rain" ||
        data.list[30].weather[0].description === "moderate rain" ||
        data.list[30].weather[0].description === "heavy intensity rain" ||
        data.list[30].weather[0].description === "	very heavy rain" ||
        data.list[30].weather[0].description === "extreme rain"
      ) {
        this.day4Src = "./../../assets/animated/rainy-7.svg";
      } else if (
        data.list[30].weather[0].description ===
          "thunderstorm with light rain" ||
        data.list[30].weather[0].description === "thunderstorm with rain" ||
        data.list[30].weather[0].description ===
          "thunderstorm with heavy rain" ||
        data.list[30].weather[0].description === "light thunderstorm" ||
        data.list[30].weather[0].description === "thunderstorm" ||
        data.list[30].weather[0].description === "heavy thunderstorm" ||
        data.list[30].weather[0].description === "ragged thunderstorm" ||
        data.list[30].weather[0].description ===
          "thunderstorm with light drizzle" ||
        data.list[30].weather[0].description === "thunderstorm with drizzle" ||
        data.list[30].weather[0].description ===
          "thunderstorm with heavy drizzle"
      ) {
        this.day4Src = "./../../assets/animated/thunder.svg";
      } else if (
        data.list[30].weather[0].description === "light snow" ||
        data.list[30].weather[0].description === "freezing rain" ||
        data.list[30].weather[0].description === "Snow" ||
        data.list[30].weather[0].description === "Heavy snow" ||
        data.list[30].weather[0].description === "Sleet" ||
        data.list[30].weather[0].description === "Light shower sleet" ||
        data.list[30].weather[0].description === "Shower sleet" ||
        data.list[30].weather[0].description === "Light rain and snow" ||
        data.list[30].weather[0].description === "Rain and snow" ||
        data.list[30].weather[0].description === "Light shower snow" ||
        data.list[30].weather[0].description === "Shower snow" ||
        data.list[30].weather[0].description === "Heavy shower snow" ||
        data.list[30].weather[0].description === "snow"
      ) {
        this.day4Src = "./../../assets/animated/snowy-6.svg";
      }

      this.day5Temp = this.lTemp(data.list[38].main.temp_max);

      if (data.list[38].weather[0].description === "clear sky") {
        this.day5Src = "./../../assets/animated/day.svg";
      } else if (data.list[38].weather[0].description === "few clouds") {
        this.day5Src = "./../../assets/animated/cloudy-day-1.svg";
      } else if (data.list[38].weather[0].description === "scattered clouds") {
        this.day5Src = "./../../assets/animated/cloudy-day-3.svg";
      } else if (
        data.list[38].weather[0].description === "broken clouds" ||
        data.list[38].weather[0].description === "overcast clouds"
      ) {
        this.day5Src = "./../../assets/animated/cloudy.svg";
      } else if (
        data.list[38].weather[0].description === "light intensity drizzle" ||
        data.list[38].weather[0].description === "drizzle" ||
        data.list[38].weather[0].description === "heavy intensity drizzle" ||
        data.list[38].weather[0].description ===
          "light intensity drizzle rain" ||
        data.list[38].weather[0].description === "drizzle rain" ||
        data.list[38].weather[0].description ===
          "heavy intensity drizzle rain" ||
        data.list[38].weather[0].description === "shower rain and drizzle" ||
        data.list[38].weather[0].description ===
          "heavy shower rain and drizzle" ||
        data.list[38].weather[0].description === "shower drizzle" ||
        data.list[38].weather[0].description ===
          "light intensity shower rain" ||
        data.list[38].weather[0].description === "shower rain" ||
        data.list[38].weather[0].description ===
          "heavy intensity shower rain" ||
        data.list[38].weather[0].description === "ragged shower rain" ||
        data.list[38].weather[0].description === "rain"
      ) {
        this.day5Src = "./../../assets/animated/rainy-3.svg";
      } else if (
        data.list[38].weather[0].description === "light rain" ||
        data.list[38].weather[0].description === "moderate rain" ||
        data.list[38].weather[0].description === "heavy intensity rain" ||
        data.list[38].weather[0].description === "	very heavy rain" ||
        data.list[38].weather[0].description === "extreme rain"
      ) {
        this.day5Src = "./../../assets/animated/rainy-7.svg";
      } else if (
        data.list[38].weather[0].description ===
          "thunderstorm with light rain" ||
        data.list[38].weather[0].description === "thunderstorm with rain" ||
        data.list[38].weather[0].description ===
          "thunderstorm with heavy rain" ||
        data.list[38].weather[0].description === "light thunderstorm" ||
        data.list[38].weather[0].description === "thunderstorm" ||
        data.list[38].weather[0].description === "heavy thunderstorm" ||
        data.list[38].weather[0].description === "ragged thunderstorm" ||
        data.list[38].weather[0].description ===
          "thunderstorm with light drizzle" ||
        data.list[38].weather[0].description === "thunderstorm with drizzle" ||
        data.list[38].weather[0].description ===
          "thunderstorm with heavy drizzle"
      ) {
        this.day5Src = "./../../assets/animated/thunder.svg";
      } else if (
        data.list[38].weather[0].description === "light snow" ||
        data.list[38].weather[0].description === "freezing rain" ||
        data.list[38].weather[0].description === "Snow" ||
        data.list[38].weather[0].description === "Heavy snow" ||
        data.list[38].weather[0].description === "Sleet" ||
        data.list[38].weather[0].description === "Light shower sleet" ||
        data.list[38].weather[0].description === "Shower sleet" ||
        data.list[38].weather[0].description === "Light rain and snow" ||
        data.list[38].weather[0].description === "Rain and snow" ||
        data.list[38].weather[0].description === "Light shower snow" ||
        data.list[38].weather[0].description === "Shower snow" ||
        data.list[38].weather[0].description === "Heavy shower snow" ||
        data.list[38].weather[0].description === "snow"
      ) {
        this.day5Src = "./../../assets/animated/snowy-6.svg";
      }
    });
  }
}
