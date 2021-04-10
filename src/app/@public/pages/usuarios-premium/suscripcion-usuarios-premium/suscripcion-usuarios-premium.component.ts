import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/@core/services/pais.service';
import { ValidatorService } from '../../forms/validators/services/validator.service';

@Component({
  selector: 'app-suscripcion-usuarios-premium',
  templateUrl: './suscripcion-usuarios-premium.component.html',
  styleUrls: ['./suscripcion-usuarios-premium.component.scss']
})
export class SuscripcionUsuariosPremiumComponent implements OnInit {
  paises = [];


  miFormulario:  FormGroup = this.fb.group({
    nombre: [ 'test6', [Validators.required]],
    familiar: [ '', [Validators.required]],
    pais: [ '', [Validators.required]],
    apellido: [ 'test6', [Validators.required]],
    medicamentos: [ '', [Validators.required]],
    email: ['test6@gmail.com', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ] ],
    numero: ['123456', [ Validators.required, Validators.minLength(6) ]  ],
  });

  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('email')?.errors;

    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.pattern ) {
      return 'El valor ingresado no tiene formato de correo';
    } 

    return '';
  }
  
  //Validaciones campos de formulario
 campoNoValido( campo: string ) {
  return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched;
}


  constructor( private fb: FormBuilder, 
               private validatorService: ValidatorService,
               private paisesService: PaisService) { }

  ngOnInit(): void {
    this.listarPaises()
    this.miFormulario.value.pais= '';
  }

  listarPaises(){
    this.paisesService.ListadoPaises()
    .subscribe( (paises) => {
      console.log( paises );
      this.paises = paises;
      
    }, (err) => {
      this.paises = [];
      
    })
  }
}
