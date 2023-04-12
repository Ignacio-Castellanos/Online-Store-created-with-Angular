import { Component } from '@angular/core';
import {CarritoService} from '../carrito.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styleUrls: ['./lista-carrito.component.css']
})
export class ListaCarritoComponent implements OnInit {

form;
items=[];
mensaje;
constructor(private carrito:CarritoService, private formulario:FormBuilder) {
  this.form=this.formulario.group({
   nombrecito: '',
   email:''
  });


}

ngOnInit(): void {
  this.items=this.carrito.ListarCarrito();

}

onSubmit(dato){


  this.mensaje=this.carrito.GuardarDatos(dato);
  this.mensaje.subscribe(datos=>{


  })

}



}
