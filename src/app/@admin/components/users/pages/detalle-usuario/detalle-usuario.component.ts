import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UsuariosService } from 'src/app/@admin/core/services/usuarios.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { EmailValidatorService } from 'src/app/@public/pages/forms/validators/services/email-validator.service';
import { ValidatorService } from 'src/app/@public/pages/forms/validators/services/validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    rol:'',
    estado: '',
    uid: '',
    img: ''
  }
 
  
  miFormulario:  FormGroup = this.fb.group({
    nombre: [ '', [Validators.required]],
    apellido: [ '', [Validators.required]],
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ]],
    rol: ['' , [Validators.required]],
    estado: ['true' , [Validators.required]]

  });
  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('email')?.errors;

    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.pattern ) {
      return 'El valor ingresado no tiene formato de correo';
    }
  }


  constructor(private usuariosService: UsuariosService,
    private emailValidator: EmailValidatorService, 
    private validatorService: ValidatorService,
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({uid}) => this.usuariosService.getUsuariosPorId(uid))
    ).subscribe(usuario => {
      this.usuario = usuario;
    })

  
  }
 
  //Validaciones campos de formulario
 campoNoValido( campo: string ) {
  return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched;
}


actualizarUsuario( ){
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Save`,
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      console.log(this.usuario)
      this.usuariosService.actualizarUsuario( this.usuario ).
       subscribe ( usuario => {
        console.log(usuario);
    });
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  
    
}


}
