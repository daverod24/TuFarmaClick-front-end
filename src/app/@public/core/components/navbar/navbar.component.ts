import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/core/interfaces/login.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  //access = false;
  role: string;
  userLabel = '';
  nombre: string;

  constructor(private auth: AuthService) {
    this.auth.accessVar$.subscribe((result) => {
      if (result === null) {
        this.userLabel = '';
        return;
      }

      this.userLabel = `${result.usuario!.nombre} ${result.usuario!.apellido}`;
    });
  }

  ngOnInit(): void {

this.userLabel = this.asignarUserLabel();

  }



  asignarUserLabel ( ) {

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    let userLabel;

    
    if (usuario) {
      return userLabel = `${usuario.nombre} ${usuario.apellido}`;
    } else {
      return userLabel = '';
    }

  }

  logout() {
    this.auth.logout();
  }
}
