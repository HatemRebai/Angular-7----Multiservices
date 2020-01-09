import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { Services } from 'app/tables/services.service';







export class Ouvrier {
  constructor(
    public id: number,
    public username: string,
    public moyenne: Float32List,
    public typedouvrier: typeof Type,
    public adresse: string,
    public tel: string,
    public available: boolean,
    public services: Services,
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class OuvrierService {

  Url = 'http://localhost:9000/ouvrier/deleteouvrier';
  url1 = 'http://localhost:9000/ouvrier/available';
  url2 = 'http://localhost:9000/ouvrier/update';
  url3 = 'http://localhost:9000/ouvrier/getOne/'
  url4 = 'http://localhost:9000/ouvrier//notavailable';


  constructor(private http: HttpClient) { }



  getOuvrier() {
    return this.http.get<Ouvrier[]>('http://localhost:9000/ouvrier/allouvrier');
  }
  getone(id: number){
    return this.http.get<Ouvrier[]>(this.url3 + '/' + id );
  }
  getAvailable() {
    return this.http.get<Ouvrier[]>(this.url1);
  }
  deleteOuvrier(ouvrier: Ouvrier) {
    return this.http.delete<Ouvrier>(this.Url + '/' + ouvrier.id);
  }
  setAvailable(id: number) {
    return this.http.get<Ouvrier[]>(this.url2 + '/' + id);
  }
}
