import { CarritoDeCompras } from './../../@public/core/components/shopping-cart/shoppin-cart.interface';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos.interface';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productos: Array<Producto> = [];

  carritoDeCompras: CarritoDeCompras = {
    total: 0,
    subtotal: 0,
    productos: this.productos,
    totalProductosAgregados: 0,
  };

  constructor() {}


  /**
   * 
   * VEr el carrrito
   */
  async getCarrito() {
    return this.carritoDeCompras;
  }

  /**
   * 
   * Reiniciar carrito
   */
  async reiniciarCarrito() {

    this.carritoDeCompras =  {
      total: 0,
      subtotal: 0,
      productos: [],
      totalProductosAgregados: 0,
    };



    localStorage.setItem('carrito', JSON.stringify(this.carritoDeCompras));


  }


  /**
   * Se encarga de guardar el producto en el carrito
   */
  async guardarProducto(productoAgregado: Producto) {
    let actializarProducto: Boolean = false;
    let sumaTotal: number = 0;
    let totalProductosAgregados: number = 0;

    this.iniciarCarritoDeCompras();

    await this.carritoDeCompras.productos.forEach(async (producto, indice) => {
      if (producto._id == productoAgregado._id) {
        actializarProducto = true;
        this.carritoDeCompras.productos[indice].productosAgregados += 1;
        this.carritoDeCompras.productos[indice].precioTotalPorProducto =
          this.carritoDeCompras.productos[indice].productosAgregados *
          this.carritoDeCompras.productos[indice].precio;
        // localStorage.setItem('carrito', JSON.stringify(this.carritoDeCompras));
      }
    });

    if (!actializarProducto) {

      productoAgregado.productosAgregados = 1;


      productoAgregado.precioTotalPorProducto =
        productoAgregado.precio * productoAgregado.productosAgregados;
      this.carritoDeCompras.productos.push(productoAgregado);
      localStorage.setItem('carrito', JSON.stringify(this.carritoDeCompras));
    } 



      await this.carritoDeCompras.productos.forEach((producto) => {
        sumaTotal += producto.precioTotalPorProducto;
        totalProductosAgregados += producto.productosAgregados
      });

      
      this.carritoDeCompras.total = sumaTotal;
      this.carritoDeCompras.totalProductosAgregados = totalProductosAgregados;
      localStorage.setItem('carrito', JSON.stringify(this.carritoDeCompras));

  }

  /**
   * Elimina un producto del carrito
   */
  async eliminarProducto(productoEliminado: Producto) {

    let actializarProducto: Boolean = false;
    let sumaTotal: number = 0;
    let totalProductosAgregados: number = 0;


    this.iniciarCarritoDeCompras();

    await this.carritoDeCompras.productos.forEach(async (producto, indice) => {
      if (producto._id == productoEliminado._id  && producto.productosAgregados > 0) {


        actializarProducto = true;
        this.carritoDeCompras.productos[indice].productosAgregados -= 1;
        this.carritoDeCompras.productos[indice].precioTotalPorProducto =
          this.carritoDeCompras.productos[indice].productosAgregados *
          this.carritoDeCompras.productos[indice].precio;
        // localStorage.setItem('carrito', JSON.stringify(this.carritoDeCompras));
      }


      if(producto.productosAgregados === 0) {
        this.carritoDeCompras.productos.splice(indice, 1);
      }
    });

    // if (!actializarProducto) {
    //   productoEliminado.productosAgregados = 1;
    //   productoEliminado.precioTotalPorProducto =
    //     productoEliminado.precio * productoEliminado.productosAgregados;
    //   this.carritoDeCompras.productos.push(productoEliminado);
    //   localStorage.setItem('carrito', JSON.stringify(this.carritoDeCompras));
    // } 





      await this.carritoDeCompras.productos.forEach((producto) => {
        sumaTotal += producto.precioTotalPorProducto;
        totalProductosAgregados += producto.productosAgregados
      });

      
      this.carritoDeCompras.total = sumaTotal;
      this.carritoDeCompras.totalProductosAgregados = totalProductosAgregados;
      localStorage.setItem('carrito', JSON.stringify(this.carritoDeCompras));



  }



  /**
   * Metodo que se encarga de crear un carrito de compras vacio y guardarlo en el local storage
   */
  iniciarCarritoDeCompras() {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));

    if (carritoStorage) {
      this.carritoDeCompras = carritoStorage;

      return;
    }

    localStorage.setItem('carrito', JSON.stringify(this.carritoDeCompras));
  }

  initialize() {
    const productoStore = JSON.parse(localStorage.getItem('carritoDeCompras'));
    if (productoStore !== null) {
      this.carritoDeCompras = productoStore;
    }
    return this.carritoDeCompras;
  }

 

  open() {
    document.getElementById('mySidenav').style.width = '600px';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('app').style.overflow = 'hidden';
  }
  close() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('app').style.overflow = 'auto';
  }
}
