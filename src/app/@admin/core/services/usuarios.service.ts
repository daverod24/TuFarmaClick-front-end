import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/@core/interfaces/login.interface';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }


getUsuarios ( ): Observable<Usuarios> {

  return this.http.get<Usuarios>(  `${this.baseUrl}usuarios` )

}

deleteUsuario(uid: string): Observable<any> {


  const headers = new HttpHeaders()
  .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );


  return this.http.delete<any>( `${this.baseUrl}usuarios/${uid}`, {headers} )
}

agregarUsuario( usuario: Usuario ): Observable<Usuario>{
  return this.http.post<Usuario>( `${ this.baseUrl }/usuario`, usuario);
}

// actualizarUsuario( ): Observable<any>{
//   return this.http.put<any>( `${ this.baseUrl }/heroes/${ heroe.id }`, heroe);
// }


}
