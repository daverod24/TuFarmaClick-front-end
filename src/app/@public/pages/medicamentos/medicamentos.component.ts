import { Component, OnInit } from '@angular/core';
import {  Producto} from 'src/app/@core/interfaces/productos.interface';
import { CartService } from 'src/app/@core/services/cart.service';
import { ProductosService } from 'src/app/@core/services/productos.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss']
})
export class MedicamentosComponent implements OnInit {

  listadoProductos: Producto[];
  page: number= 1;

  constructor( private productosService: ProductosService, private cartService: CartService) { }

  ngOnInit(): void {

    this.listarProductos();
  }

  agregarProductos(producto: Producto){
    console.log('agregar')
    this.cartService.gestionarProductos(producto);
    // localStorage.setItem('producto',JSON.stringify( producto));

  }


  listarProductos() {

    this.productosService.getMedicamentos().subscribe((resp) => {
       this.listadoProductos = resp.productos;


    });
  }

}
