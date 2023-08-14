import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  getData() {
    return this._http.get('https://mocki.io/v1/c0e0b9f6-bf0c-49fe-85a3-c655cfb25bf0');
    } 

}
