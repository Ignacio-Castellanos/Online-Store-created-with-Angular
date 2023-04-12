import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{productos} from './productos';




@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos=productos;
  items=[];

  url="http://localhost:8080/services/";

  constructor(private http:HttpClient) { }

  añadirCarrito(producto){
   let encontrado=false;


    this.items.forEach((elemento)=>{
      if(elemento.id==producto.id){
        encontrado=true;
        elemento.cantidad+=1;
      }
     });

   if(!encontrado)
    this.items.push(producto);
  }

  LimpiarCarrito(){
    this.items=[];
    return this.items;
  }

  ListarCarrito(){
   return this.items;
  }


GuardarDatos(datos){
 return this.http.post(`${this.url}guardar.php`,JSON.stringify(datos));
}


}
