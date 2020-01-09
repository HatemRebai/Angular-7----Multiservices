import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';


export class Services {

  constructor(
    public id: number,
    public titre: string,
    public description: string
  ) {}
}
@Injectable({
  providedIn: 'root'
})


export class ServiceService {

  Url = 'http://localhost:9000/service/add';
  Url3 = 'http://localhost:9000/client/deleteclient';

  constructor(private http: HttpClient) { }

  addClient(service: Services) {
    return this.http.post<Services[]>(this.Url, service);
  }
}
