import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario, Usuarios } from '../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  


  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }


getUsuarios (): Observable<Usuarios> {

  return this.http.get<Usuarios>(  `${this.baseUrl}usuarios` )

}

deleteUsuario(uid: string): Observable<any> {


  const headers = new HttpHeaders()
  .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

  return this.http.delete<any>( `${this.baseUrl}usuarios/${uid}`, {headers} )
}


getUsuariosPorId( uid: string ):Observable<any>{
console.log(uid)
  const headers = new HttpHeaders()
  .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

  return this.http.get<any>(`${ this.baseUrl }usuarios/${uid}`, {headers});
}

actualizarUsuario( usuario): Observable<Usuarios>{

  return this.http.put<any>(`${ this.baseUrl }usuarios/${ usuario.uid }`, usuario )
}


}
