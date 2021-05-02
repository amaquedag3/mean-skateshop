import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  URL = "http://localhost:3000/api/clientes";
  selectedCliente : Cliente = new Cliente();

  constructor(private http: HttpClient) { }

  getAllClientes(){
    return this.http.get(this.URL);
  }

  crearCliente(cliente: Cliente){
    return this.http.post(this.URL, cliente);
  }

  actualizarCliente(cliente: Cliente){
    return this.http.put(this.URL +  `/${cliente.id}`, cliente);
  }

  borrarCliente(id: String){
    return this.http.delete(this.URL +  `/${id}`)
  }
}
