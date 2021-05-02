import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly URL = 'http:localhost:3000/api';

  constructor(private http: HttpClient) { }

  register(cliente: Cliente){
    return this.http.post(this.URL + "/register", cliente);
  }

  login(email: String, pass: String){
    let data: Array<any>  = [email, pass];
    return this.http.post(this.URL + "/login", data);
  }
}
