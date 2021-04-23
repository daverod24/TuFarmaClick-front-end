import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/@core/interfaces/productos.interface';
import { CartService } from 'src/app/@core/services/cart.service';
import { CarritoDeCompras } from './shoppin-cart.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './shoppin-cart.component.html',
  styleUrls: ['./shoppin-cart.component.scss']
})
export class ShoppinCartComponent implements OnInit {

  productosAgregados: number = 0;
  total: number = 0;
  precio: number = 25;
  cart: CarritoDeCompras;
  carrito;
  productos: Array<Producto> = [];

  carritoDeCompras: CarritoDeCompras = {
    total: 0,
    subtotal: 0,
    productos: this.productos,
    totalProductosAgregados: 0,
  };

  get getProductosAgregados() {
    return this.productosAgregados;
  }

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
   this.cart = this.cartService.initialize();
    this.carritoDeCompras;
    this.cartService.getCarrito().then ((productos) => {
      this.carritoDeCompras = productos;
    })
  }

   agregar(){
    // const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    // this.carritoDeCompras = carritoStorage;
    // console.log(this.carritoDeCompras);
    this.cartService.getCarrito().then ((productos) => {
      this.carritoDeCompras = productos;
    })
   }

  sumaProductos( valor: number ){
    this.productosAgregados = this.productosAgregados + valor;
    this.total = this.productosAgregados * this.precio;
  }

  restaProductos( valor: number){
    this.productosAgregados = this.productosAgregados - valor
    this.total = this.productosAgregados * this.precio;

    if(this.productosAgregados <= 0){
     this.productosAgregados = 0
    return this.total = 0
     
    }
   

  }
 
 

  eliminarProducto(producto: Producto){

    this.cartService.eliminarProducto(producto);

    this.carrito = this.cartService.getCarrito();

  }
  
  closeNav(){
   this.cartService.close();
  }

}
