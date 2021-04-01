import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})



export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;
  
  accessVar = new Subject<any>();
  accessVar$ = this.accessVar.asObservable();

  get usuario() {
    return { ...this._usuario };
  }

  constructor( private http: HttpClient ) { }

  //Registro de usuario
  registro( nombre: string, apellido: string, email: string, password: string, rol: string ="USER_ROLE" ) {

    const url  = `${ this.baseUrl }usuarios`;
    const body = { email, password, nombre, apellido, rol };


    console.log(body);

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( ({ ok, token }) => {
          if ( ok ) {
            localStorage.setItem('token', token! );
            
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
        );
      

  }

  //Inicio de sesión

  login( email: string, password: string ) {

    const url  = `${ this.baseUrl }auth/login`;
    const body = { email, password };

    return this.http.post<any>( url, body )
      .pipe(
        tap( resp => {
          console.log(resp);
          if ( resp.ok ) {
            localStorage.setItem('token', resp.token! );
            localStorage.setItem('usuario', resp.usuario.nombre! );
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );
  }


  

  logout() {
    localStorage.removeItem('token');
  }


}
