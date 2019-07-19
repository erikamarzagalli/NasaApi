import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  public getNasaImage(data: Date): Observable<any> {
    const day = data.getDate() ;
    const month = data.getMonth() + 1 ;
    const year = data.getFullYear();
    const apiKey = '3LU8lgBE1OShZehmCUaf97TnXyMFKv3tTIo7RC06';
    const apodUrl = `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${apiKey}&hd=true`;
    return this.http.get<any>(apodUrl);
  }

}
