import { Component, OnInit } from '@angular/core';
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

  get getProductosAgregados() {
    return this.productosAgregados;
  }

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
   this.cart = this.cartService.initialize();
   //console.log('carrito', this.cart);
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
  closeNav(){
   this.cartService.close();
  }

}
