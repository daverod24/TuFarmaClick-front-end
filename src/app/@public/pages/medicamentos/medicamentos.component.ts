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
  carrito;

  constructor( 
    private productosService: ProductosService,
    private cartService: CartService) { }

  ngOnInit(): void {

    this.listarProductos();


    this.carrito = this.cartService.getCarrito();

  }

  agregarProductos(producto: Producto){

    this.cartService.guardarProducto(producto);

    this.carrito = this.cartService.getCarrito();

  }
  eliminarProducto(producto: Producto){

    this.cartService.eliminarProducto(producto);

    this.carrito = this.cartService.getCarrito();

  }

  reiniciarCarrito() {
    this.cartService.reiniciarCarrito();
    this.carrito = this.cartService.getCarrito();

  }







  listarProductos() {

    this.productosService.getMedicamentos().subscribe((resp) => {
       this.listadoProductos = resp.productos;


    });
  }

}
