import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly baseUrl = 'https://localhost:44331';

  constructor(private http: HttpClient) { }

  GetVideoPath(){
    const headers = new HttpHeaders({ });
    return this.http.get(this.baseUrl + '/WeatherForecast', { headers, responseType: "blob" })
  }
}
