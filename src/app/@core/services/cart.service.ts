import { Injectable } from '@angular/core';
import { Icart } from 'src/app/@public/core/components/shopping-cart/shoppin-cart.interface';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productos: Array<Producto> = []
  cart: Icart ={
    total: 0,
    subtotal: 0,
    products: this.productos
  };

  constructor() { }

  //Inicializar el carrito de compra para tener la información almacenada
  

   initialize(){
      const productoStore = JSON.parse(localStorage.getItem('cart'));
      if (productoStore !== null ) {
        this.cart = productoStore;
      }
      return this.cart;
   }

   gestionarProductos(producto: Producto){
    //Obtener cantidad de productos en el carrito
    const productoTotal = this.cart.products.length;
    if (productoTotal === 0) {
      console.log('Añadiendo primer producto')
      this.cart.products.push(producto);
    }else {//Si tenemos productos hacemos lo siguiente
      let actualizarOk = false;
      for (let i = 0; i < productoTotal; i++){
        //Comprobar que coincida el producto con alguno de la lista
        if ( producto._id === this.cart.products[i]._id){
           console.log('Producto existente');

        }else {
          this.cart.products[i]= producto;
        }
        actualizarOk = true;
        i = productoTotal;
      }
      if (!actualizarOk){
      this.cart.products.push(producto);

      }
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
   }


  open() {
    document.getElementById('mySidenav').style.width = '600px';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('app').style.overflow = 'hidden';

  }
  close(){
    document.getElementById('mySidenav').style.width = "0";
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('app').style.overflow = 'auto';
  }

}
