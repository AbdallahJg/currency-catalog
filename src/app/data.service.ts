import { Injectable } from '@angular/core';
import {Http, Headers,} from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

//const headers = new HttpHeaders().set('Accept', 'application/vnd.api+json');
let headers = new HttpHeaders();
headers = headers.set('Accept', 'application/vnd.api+json');
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }
 
  getCurrencies(PageId)
  {
   return this.http.get('https://api.openfintech.io/v1/currencies?page[number]='+PageId+'&amp;page[size]=20', {headers: headers})
 }
 getCurrencyById(Id)
 {
 return this.http.get('https://api.openfintech.io/v1/currencies/'+Id, {headers: headers})
 }

}
