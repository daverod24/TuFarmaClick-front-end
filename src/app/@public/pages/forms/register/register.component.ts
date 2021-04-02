import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth.service';
import Swal from 'sweetalert2';
import { EmailValidatorService } from '../validators/services/email-validator.service';
import { ValidatorService } from '../validators/services/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  miFormulario:  FormGroup = this.fb.group({
    nombre: [ 'test6', [Validators.required]],
    apellido: [ 'test6', [Validators.required]],
    email: ['test6@gmail.com', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ] ],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]  ],
    password2: ['123456', [ Validators.required ]  ],
  }, {
    validators: [ this.validatorService.camposIguales('password','password2') ]
  });

  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('email')?.errors;

    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.pattern ) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.emailTomado ) {
      return 'El email ya fue tomado';
    }

    return '';
  }


  constructor(private fb: FormBuilder, 
              private emailValidator: EmailValidatorService, 
              private validatorService: ValidatorService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  //Validaciones campos de formulario
  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  registro() {
    const { nombre, apellido, email, password } = this.miFormulario.value;

    this.authService.registro( nombre, apellido, email, password)
      .subscribe( ok => {

        if ( ok === true ) {
          this.router.navigateByUrl('/');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });

  }
  // submitFormulario() {

  //   if( this.miFormulario.invalid ){
  //     this.miFormulario.markAllAsTouched();
  //     return;
  //   }

  //   this.miFormulario.reset();

  // }

  
}
