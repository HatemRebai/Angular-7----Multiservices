import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Client {

  constructor(
    public id: number,
    public username: string,
    public adresse: string,
    public tel: string,
    public email: string
  ) { }
}
@Injectable({
  providedIn: 'root'
})


export class ClientService {

Url = 'http://localhost:9000/client/deleteclient';

constructor(private http: HttpClient) { }
  getClient() {
    return this.http.get<Client[]>('http://localhost:9000/client/allclient');
  }

  deleteClient(client: Client) {
    return this.http.delete<Client>(this.Url + '/' + client.id);
  }
}


