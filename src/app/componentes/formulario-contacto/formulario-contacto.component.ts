import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  nombre: "string";
  email: "string";
  mensaje: "string";
}

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

  model = {
    nombre: "",
    email: "",
    mensaje: ""
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('Form values', form );

  }

}

// registrarForm() {
//     this.persona.nombre = this.crearCuenta.value.nombre;
//     this.persona.apellido = this.crearCuenta.value.apellido;
//     this.persona.LELCDNI = this.crearCuenta.value.LELCDNI;
//     this.persona.email = this.crearCuenta.value.email;
//     this.persona.password = this.crearCuenta.value.password;
//     console.log("Se ha creado un usuario de manera válida");
//     console.log(this.persona);
//     this.crearCuenta.reset();
//   }
