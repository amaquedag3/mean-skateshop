import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})


export class CarritoComponent implements OnInit {
  public productosCarrito = [];
  public cantidadesProductos = [];
  public cantidadTotal  = 0
  public importeTotal = 0;

 
  constructor(private carritoService:CarritoService) { }

  ngOnInit() {
    this.carritoService.recibirProducto().subscribe((producto: Producto) => {
      this.recibirProducto(producto)
    })
  }

  recibirProducto(producto: Producto){
    let enc = false;
    if(this.productosCarrito){
      for(let x = 0; x < this.productosCarrito.length; x++){
        if(this.productosCarrito[x].nombre == producto.nombre){
          this.cantidadesProductos[x]++;
          enc = true
        }
      }
      if (enc == false){
       this.nuevoProductoCarrito(producto)
      }
    }else{
      this.nuevoProductoCarrito(producto)
    }
    this.actualizarImporte()
    this.actualizarCantidadTotal()
  }

  nuevoProductoCarrito(producto){
    this.productosCarrito.push(producto)
    this.cantidadesProductos.push(1)
  }
  
  actualizarImporte(){
    for (let x = 0; x < this.productosCarrito.length; x ++){
      this.importeTotal += this.productosCarrito[x].precio * this.cantidadesProductos[x]
    }
  }

  actualizarCantidadTotal(){
    this.cantidadTotal = 0;
    for (let x = 0; x < this.cantidadesProductos.length; x++){
      this.cantidadTotal += this.cantidadesProductos[x];
    }
  }

}
