import { Component, OnInit } from '@angular/core';
import{productos} from '../productos';
import{CarritoService} from '../carrito.service';
@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit{


  productos=productos;


  constructor(private carrito:CarritoService) { }


  ngOnInit(): void {

  }


  añadirCarrito(producto){
    this.carrito.añadirCarrito(producto);
    window.alert("Producto añadido con el id" +producto.id);
  }


}
