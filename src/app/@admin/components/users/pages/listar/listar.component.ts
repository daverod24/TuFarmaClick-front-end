import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  titulo: String = 'Usuarios';
  usuarios: Usuario[];

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
    this.usuariosService.deleteUsuario(uid).subscribe((usuarioBorrado) => {
      console.log(usuarioBorrado);

      this.actualizarUsuarios();

      this.router.navigate(['/admin/users']);
    });
  }

  actualizarUsuarios() {
    this.usuariosService.getUsuarios().subscribe((resp) => {
      console.log(resp);

      this.usuarios = resp.usuarios;
    });
  }
}
