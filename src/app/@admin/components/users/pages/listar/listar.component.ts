import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../core/services/usuarios.service';
import { Usuario } from '../../../../core/interfaces/user.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  titulo: String = 'Usuarios';
  usuarios: Usuario[];
  page: number= 1;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe((resp) => {
      this.actualizarUsuarios();
      this.usuarios = resp.usuarios;
    });
  }

  deleteUsuario(uid: string) {
    Swal.fire({
      title: '¿Estas Seguro de borrar al usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.deleteUsuario(uid).subscribe((usuarioBorrado) => {
           this.actualizarUsuarios();
      
           this.router.navigate(['/admin/users']);
         });
        Swal.fire(
          'Borrado!',
          'El usuario se borro con éxito.',
          'success'
        )
      }
    })
    // 
  }

  actualizarUsuarios() {
    this.usuariosService.getUsuarios().subscribe((resp) => {

      this.usuarios = resp.usuarios;
    });
  }
}
