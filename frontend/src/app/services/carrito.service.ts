import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private subject = new Subject();


 constructor(){}

 enviarProducto(prod: Producto){
  this.subject.next(prod);
 }

 recibirProducto(){
   return this.subject.asObservable();
 }
 
}
