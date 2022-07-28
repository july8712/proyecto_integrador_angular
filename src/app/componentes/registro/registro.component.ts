import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';

// import { FormBuilder, FormGroup}
// interface ContactForm {
//   email: "string";
//   pass: "string";
//   pass2: "string";
//   usuario: "string";
// }

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;
  // miCampo = new FormGroup();
  constructor(private readonly fb: FormBuilder) { }

  // model = {
  //   email: "",
  //   pass: "",
  //   pass2: "",
  //   usuario: ""
  // }


  ngOnInit(): void {
    this.registroForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->');

  }

  initForm():FormGroup {
    return this.fb.group({
      usuario: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      email: ["", [Validators.required, Validators.email]],
      pass:["", [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      pass2: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
    })

  }
}

// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// interface ContactForm {
//   email: "string";
//   pass: "string";
//   pass2: "string";
//   usuario: "string";
// }

// @Component({
//   selector: 'app-registro',
//   templateUrl: './registro.component.html',
//   styleUrls: ['./registro.component.css']
// })
// export class RegistroComponent implements OnInit {

//   model = {
//     email: "",
//     pass: "",
//     pass2: "",
//     usuario: ""
//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

//   onSubmit(form: NgForm): void {
//     console.log('Form values', form );

//   }
// }
