import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth.service';
import { ValidatorService } from '../validators/services/validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  miFormulario:  FormGroup = this.fb.group({
    email: ['test@gmail.com', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ] ],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]]
  })

  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('email')?.errors;
    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.pattern ) {
      return 'El valor ingresado no tiene formato de correo';
    } 
  }
 
  constructor(  private router: Router, 
                private fb: FormBuilder, 
                private validatorService: ValidatorService,
                private authService: AuthService)  { }

  ngOnInit(): void {
  }

  //Validaciones campos de formularios
  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  //Inicio de sesión 
  login(){
    const { email, password } = this.miFormulario.value;

    this.authService.login( email, password )
      .subscribe( ok => {

        if ( ok === true ) {
          this.router.navigateByUrl('/');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });
  }

}
