import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';


export class Ouvrier {
  constructor(
    public id: number,
    public moyenne: Float32List,
    public Typedouvrier: Type,

  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class OuvrierService {

  Url1 = 'http://localhost:9000/ouvrier/add';

  constructor(private http: HttpClient) { }

  addOuvrier(ouvrier: Ouvrier, id: number) {
    return this.http.post<Ouvrier>(this.Url1 + '/' + id, ouvrier);
  }

}



