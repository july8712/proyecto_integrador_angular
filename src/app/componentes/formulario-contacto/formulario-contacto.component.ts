import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/dominio/usuario';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

  usuario: Usuario=new Usuario();

  constructor() {
  }

  ngOnInit(): void {
  }

  enviarFormulario(form: any){
    console.debug("Persona: ", form.form);
  }

}
