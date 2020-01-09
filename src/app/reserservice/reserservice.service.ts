import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Services } from 'app/tables/services.service';


export class Ouvrier {
  constructor(
    public id: number,
    public username: string,
    public available: boolean,
  ) {}
}
export class Client {
  constructor(
    public id: number,
    public email: String,
    public username: string,
    public tel: string,
    reservations: any,
  ) {}
}
export class Reservation {
  constructor(
    public id: number,
    public decription: string,
    public datedebut: string,
    public datefin: string,
    public etat: string,
    public service: Services,
    public client: Client,
    public ouvrier: Ouvrier,
  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url1 = 'http://localhost:9000/reservation/validateReservation';
  url2 = 'http://localhost:9000/reservation/getinitial';
  url3 = 'http://localhost:9000/reservation/getencours';
  url4 = 'http://localhost:9000/reservation/getterminer';
  url5 = 'http://localhost:9000/reservation/finishReservation';
  url6 = 'http://localhost:9000/reservation/reserveOuv';
  url7 = 'http://localhost:9000/ouvrier/update';
  url8 = 'http://localhost:9000/client/allclient';


  constructor(private http: HttpClient) { }

  getInitial() {
    return this.http.get<Reservation[]>(this.url2);
  }
  getencours() {
    return this.http.get<Reservation[]>(this.url3);
  }
  getterminer() {
  return this.http.get<Reservation[]>(this.url4);
}
  setEtatReservation(id: number) {
    return this.http.get<Reservation[]>(this.url1 + '/' + id);
  }
  setetatterminer(id: number) {
  return this.http.get<Reservation[]>(this.url5 + '/' + id);
}
affectOuvrier(id: number, idouv: number ) {
  return this.http.get<Reservation>(this.url6 + '/' + id + '?idouv=' + idouv   )

}



}
