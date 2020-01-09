import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Services {
  constructor(
    public id: number,
    public  titre: string,
    public description: string,


  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  Url = 'http://localhost:9000/service/deleteservices';

 constructor(private http: HttpClient) { }

  getService() {
    return this.http.get<Services[]>('http://localhost:9000/service/allservice');
  }
  deleteService(service: Services) {
    return this.http.delete<Services[]>(this.Url + '/' + service.id);
  }

}


