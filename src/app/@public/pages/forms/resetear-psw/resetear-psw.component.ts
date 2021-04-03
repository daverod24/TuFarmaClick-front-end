import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth.service';
import { ValidatorService } from '../validators/services/validator.service';

@Component({
  selector: 'app-resetear-psw',
  templateUrl: './resetear-psw.component.html',
  styleUrls: ['./resetear-psw.component.scss']
})
export class ResetearPswComponent implements OnInit {
  miFormulario:  FormGroup = this.fb.group({
    email: ['test@gmail.com', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ] ],
  })

  constructor( private router: Router, 
    private fb: FormBuilder, 
    private validatorService: ValidatorService,
    private authService: AuthService) { }

  ngOnInit(): void {

  }
  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('email')?.errors;
    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.pattern ) {
      return 'El valor ingresado no tiene formato de correo';
    } 
  }
  //Validaciones campos de formularios
  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

}
