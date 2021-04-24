import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/@core/interfaces/productos.interface';
import { CartService } from 'src/app/@core/services/cart.service';
import { CarritoDeCompras } from './shoppin-cart.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './shoppin-cart.component.html',
  styleUrls: ['./shoppin-cart.component.scss'],
})
export class ShoppinCartComponent implements OnInit {
  // productosAgregados: number = 0;
  total;
  productos;
  // productos: Array<Producto> = [];

  // carritoDeCompras: CarritoDeCompras = {
  //   total: 0,
  //   subtotal: 0,
  //   productos: this.productos,
  //   totalProductosAgregados: 0,
  // };

  // get getProductosAgregados() {
  //   return this.productosAgregados;
  // }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log('Se inicia el carrito');

    setTimeout(() => {
console.log("se demora");

    }, 100);

    this.cartService.carrito$.subscribe((carrito) => {
console.log(carrito);


      this.productos = carrito.productos;
      this.total = carrito.total;

    });
  }


  eliminarProducto(producto) {
    this.cartService.eliminarProducto(producto)
  }

  // agregar() {
  //   // const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
  //   // this.carritoDeCompras = carritoStorage;
  //   // console.log(this.carritoDeCompras);
  //   this.cartService.getCarrito().then((productos) => {
  //     this.carritoDeCompras = productos;
  //   });
  // }

  // sumaProductos(valor: number) {
  //   this.productosAgregados = this.productosAgregados + valor;
  //   this.total = this.productosAgregados * this.precio;
  // }

  // restaProductos(valor: number) {
  //   this.productosAgregados = this.productosAgregados - valor;
  //   this.total = this.productosAgregados * this.precio;

  //   if (this.productosAgregados <= 0) {
  //     this.productosAgregados = 0;
  //     return (this.total = 0);
  //   }
  // }

  // eliminarProducto(producto: Producto) {
  //   this.cartService.eliminarProducto(producto);

  //   this.carrito = this.cartService.getCarrito();
  // }

  closeNav() {
    this.cartService.close();
  }
}
