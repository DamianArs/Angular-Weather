import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherApiService {
  city = new BehaviorSubject<string>("");
  send(city: string) {
    this.city.next(city);
  }
  constructor(private http: HttpClient) {}
  getDay(city): Observable<any> {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b661e18bc64e4000eac618e90194e845`
    );
  }
  getForecast(city): Observable<any> {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=b661e18bc64e4000eac618e90194e845`
    );
  }
}
