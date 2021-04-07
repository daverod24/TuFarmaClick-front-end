import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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


  updateSession(newValue: any) {
    this.accessVar.next(newValue);
  }

  constructor( private http: HttpClient, private router: Router ) { }

  //Registro de usuario
  registro( nombre: string, apellido: string, email: string, password: string, rol: string ="USER_ROLE" ) {

    const url  = `${ this.baseUrl }usuarios`;
    const body = { email, password, nombre, apellido, rol };

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

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.ok ) {
            
            this.updateSession(resp);

            localStorage.setItem('token',JSON.stringify(  resp.token! ));
            localStorage.setItem('usuario',JSON.stringify( resp.usuario ));
      
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );
  }

  //Validar sesión
  sesionValida() {
    this.accessVar$.subscribe((result) => {
      if (result.rol == 'ADMIN_ROLE') {
        return true;
      
      }else{
        console.log('No eres admin')
      }

    });
    
  }

  actualizarToken(): Observable<any> {

    const url = `${ this.baseUrl }auth/renew`;

    const headers = new HttpHeaders()
      .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( resp => {
            localStorage.setItem('token', JSON.stringify( resp.token! ));
            localStorage.setItem('usuario',JSON.stringify( resp.usuario ));


            this._usuario = {
              nombre: resp.usuario.nombre!,
              uid: resp.usuario.uid!,
              email: resp.usuario.email!
            }


            return  resp
          }),
          catchError( err => of(false) )
        );

  }


  validarUsuarioAdmin(): Observable<any> {

    const url = `${ this.baseUrl }auth/renew`;

    const headers = new HttpHeaders()
      .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( resp => {
            localStorage.setItem('token', JSON.stringify( resp.token! ));
            localStorage.setItem('usuario',JSON.stringify( resp.usuario ));
            this._usuario = {
              nombre: resp.usuario.nombre!,
              uid: resp.usuario.uid!,
              email: resp.usuario.email!
            }

            return  (resp.ok && resp.usuario.rol === 'ADMIN_ROLE')
          }),
          catchError( err => of(false) )
        );

  }


  //Cerrar sesión

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/');

    this.updateSession(null);
  }


}
