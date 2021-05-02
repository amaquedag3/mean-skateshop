import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  readonly url_api = "http://localhost:3000/api/productos";
  selectedProduct : Producto;
  allProducts: Producto[];

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(this.url_api);
  }
}
