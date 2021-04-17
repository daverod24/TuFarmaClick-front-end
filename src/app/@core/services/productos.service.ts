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


     cargarProductosSpreadsheets (): Observable<any>  {

      const headers = new HttpHeaders()
      .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );
  
      return this.http.post<any>(`${this.baseUrl}productos/spreedSheeds`,{}, {headers} )

     }


     getProducotsPorRegion(region : string): Observable<any>  {


      console.log(region);

      return this.http.get<any>( `${this.baseUrl}productos/filtrar/region/${region}` )

     }



     getRegiones ( ): Observable<any> {
      return this.http.get<any>( `${this.baseUrl}regiones` )
    }


  getMedicamentos ( ): Observable<RespuestaGetProductos> {

    return this.http.get<RespuestaGetProductos>( `${this.baseUrl}productos` )
  
  }

  deleteProducto(idProducto: string): Observable<any> {

    const headers = new HttpHeaders()
    .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

    return this.http.delete<any>(`${this.baseUrl}productos/${idProducto}`, {headers})

  }


  createProducto(producto:any): Observable<any> {

    const headers = new HttpHeaders()
    .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

    return this.http.post<any>(`${this.baseUrl}productos`,producto, {headers} )
  }


  getProductoPorId(id: string) : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}productos/${id}`)
  }

  actualizarProducto(id: string, producto : any) : Observable<any> {
    const headers = new HttpHeaders()
    .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

    return this.http.put<any>(`${this.baseUrl}productos/${id}`,producto, {headers}  )
  }

//Categoria
  getCategorias(): Observable<any> {
    return this.http.get<any>( `${this.baseUrl}categorias` )
  }

  deleteCategoria(idCategoria: string): Observable<any> {

    const headers = new HttpHeaders()
    .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

    return this.http.delete<any>(`${this.baseUrl}categorias/${idCategoria}`, {headers})

  }
  createCategoria(body: any): Observable<any> {

    const headers = new HttpHeaders()
    .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

    return this.http.post<any>(`${this.baseUrl}categorias`,body, {headers} )
  }


  subirCategoriaDesdeCsv(body: any) : Observable<any> {
    const headers = new HttpHeaders()
    .set('x-token', JSON.parse( localStorage.getItem('token'))|| '' );

    return this.http.post<any>(`${this.baseUrl}uploadsDB/categorias`,body, {headers} )
  }


}
