
import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/core/interfaces/login.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  access = false;
  role: string;
  userLabel = '';
  nombre: string;


  constructor(private auth: AuthService) {
    this.auth.accessVar$.subscribe((result) => {
      console.log(result);
      this.userLabel = `${result.usuario!.nombre}` ;
    });
  }

  ngOnInit(): void {
     
  }

  logout() {
    this.auth.logout();
  }
}
