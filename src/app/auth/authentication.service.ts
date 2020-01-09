import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class User {
  constructor(
    public status: String,
     ) {}
}

export class JwtResponse {
  constructor(
    public jwttoken: string,
     ) {}
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}

 authenticate(email, password) {
  return this.httpClient.post<any>('http://localhost:9000/user/admin', {email, password}).pipe(
   map(
     userData => {
      sessionStorage.setItem('email', email);
      const tokenStr = 'Bearer ' + userData.token;
      sessionStorage.setItem('token', userData.token);
      return userData;
    }
   )

  );
}

isUserLoggedIn() {
const user = sessionStorage.getItem('email');
return !(user === null)
}

logOut() {
sessionStorage.removeItem('email')
sessionStorage.removeItem('token')
}
//  GetUser() {
//    const jwt = sessionStorage.getItem('token');
//    console.log(jwt)
//   let jwtData , [] = jwt.split('.');
//   console.log(jwtData)
//   const decodedJwtJsonData = window.atob(jwtData);
//   console.log(decodedJwtJsonData)
//    sessionStorage.setItem('decoded', decodedJwtJsonData);
//  }
}
