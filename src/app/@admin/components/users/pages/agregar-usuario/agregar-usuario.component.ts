import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth.service';
import Swal from 'sweetalert2';

import { EmailValidatorService } from 'src/app/@public/pages/forms/validators/services/email-validator.service';
import { ValidatorService } from 'src/app/@public/pages/forms/validators/services/validator.service';
import { switchMap } from 'rxjs/operators';
import { UsuariosService } from 'src/app/@admin/core/services/usuarios.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss']
})
export class AgregarUsuarioComponent implements OnInit {
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

  constructor( private fb: FormBuilder, 
    private emailValidator: EmailValidatorService, 
    private validatorService: ValidatorService,
    private authService: AuthService,
    private usuariosService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    
  }

 //Validaciones campos de formulario
 campoNoValido( campo: string ) {
  return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched;
}

registro() {

  Swal.fire({
    title: '¿Desea guardar los cambios?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Guardar`,
    denyButtonText: `No guardar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

      const { nombre, apellido, email, password } = this.miFormulario.value;
      // Registramos el usuario
this.authService.registro(nombre, apellido, email, password).subscribe((usuarioRegistrado) =>{
  if(usuarioRegistrado) {
    Swal.fire('Usuario guardado con exito!', '', 'success')
    this.miFormulario.reset();
  } else {
    Swal.fire('Usuario no guardado', '', 'info')
  }

})
      
    } else if (result.isDenied) {
      Swal.fire('Usuario no guardado', '', 'info')
    }
  })

}
}
