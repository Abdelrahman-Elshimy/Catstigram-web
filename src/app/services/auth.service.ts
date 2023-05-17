import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl:string = "https://localhost:44385";

  constructor(private http: HttpClient) {

   }

   login(data: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/identity/login`, data);
   }

   register(data: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/identity/register`, data);
   }
}
