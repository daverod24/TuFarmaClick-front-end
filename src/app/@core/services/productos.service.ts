import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespuestaGetProductos } from '../interfaces/productos.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseUrl: string = environment.baseUrl;

  constructor(
     private http: HttpClient
     ) { }



  getMedicamentos ( ): Observable<RespuestaGetProductos> {

    return this.http.get<RespuestaGetProductos>( `${this.baseUrl}productos` )
  
  }

  deleteProducto(idProducto: string): Observable<any> {

    const headers = new HttpHeaders()
    .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

    return this.http.delete<any>(`${this.baseUrl}productos/${idProducto}`, {headers})

  }


  createProducto(data:any): Observable<any> {




    // const body = {
    //   precio, nombre, categoria, usuario, 
    // }
    const headers = new HttpHeaders()
    .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );


    // console.log(archivo)


    return this.http.post<any>(`${this.baseUrl}productos`,data, {headers} )
  }
}
