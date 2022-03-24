import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario de registro';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas=new Array();

  constructor(){

    this.entradas=[
      
      {titulo:"Python cada día más presente"},
      {titulo:"js cada día más presente"},
      {titulo:"ruby cada día más presente"},
      {titulo:"angular cada día más presente"},
      {titulo:"raul cada día más presente"},
      {titulo:"periquin cada día más presente"},
      {titulo:"jose cada día más presente"},
    ]
  }

  registrarUsuario(){

     this.registrado=true;

     this.mensaje="usuario registrado";
  }
}
