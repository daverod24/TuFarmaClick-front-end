import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespuestaGetProductos } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }
  getMedicamentos ( ): Observable<RespuestaGetProductos> {

    return this.http.get<RespuestaGetProductos>( `${this.baseUrl}productos` )
  
  }
}
