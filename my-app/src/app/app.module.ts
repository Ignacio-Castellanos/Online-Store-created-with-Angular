import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaProductoComponent,
    ListaCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
