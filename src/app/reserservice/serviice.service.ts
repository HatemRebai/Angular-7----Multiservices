import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'app/user/client.service';
import { Ouvrier } from 'app/home/ouvrier.service';


export class Services {
  constructor(
    public id: number,
    public  titre: string,
    public description: string,
    public ouvrier: Ouvrier,

  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class ServiiceService {

  url = 'http://localhost:9000/service/deleteservices';

  constructor(private http: HttpClient) { }
  getService() {
    return this.http.get<Services[]>('http://localhost:9000/service/allservice');
  }
  deleteService(service: Services) {
    return this.http.delete<Services[]>(this.url + '/' + service.id);
  }
}


