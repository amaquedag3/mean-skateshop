import { Component, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-body',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public productService: ProductoService, private CarritoService : CarritoService) { }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProducts()
      .subscribe(res => {
        this.productService.allProducts = res as Producto[];
        //console.log(res);
      });
  }

  enviarProducto(producto: Producto){
    this.CarritoService.enviarProducto(producto);
  }

}
