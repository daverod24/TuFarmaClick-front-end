import { Injectable } from '@angular/core';
import { CarritoDeCompras } from 'src/app/@public/core/components/shopping-cart/shoppin-cart.interface';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  productos: Array<Producto> = [];

  
  carritoDeCompras: CarritoDeCompras ={
    total: 0,
    subtotal: 0,
    productos: this.productos, 
    totalProductosAgregados: 0
  };

  constructor() { }


  



  /**
   * SE encarga de guardar el producto en el carrito
   */
  guardarProducto(producto: Producto) {


    this.iniciarCarritoDeCompras();

    this.carritoDeCompras.productos.forEach((producto, indice) => {

      if(producto._id === producto._id) {
    console.log("Existe");


          this.carritoDeCompras.productos[indice].productosAgregados +=  1;
          this.carritoDeCompras.productos.splice(indice, 1);

           localStorage.setItem('carrito', JSON.stringify( this.carritoDeCompras));

        // if(producto.productosAgregados) {

        //   this.carritoDeCompras.productos[indice].productosAgregados = 2;
        //   this.carritoDeCompras.productos.splice(indice, 1);

        //   localStorage.setItem('carrito', JSON.stringify( this.carritoDeCompras));
        //   return;
        // } else if(producto.productosAgregados > 1) {

        //   this.carritoDeCompras.productos[indice].productosAgregados +=  1;
        //   this.carritoDeCompras.productos.splice(indice, 1);

        //   localStorage.setItem('carrito', JSON.stringify( this.carritoDeCompras));
        //   return;

        // }
      } 

    });


    console.log("No existe");

    producto.productosAgregados = 1;

    this.carritoDeCompras.productos.push(producto);

    localStorage.setItem('carrito', JSON.stringify( this.carritoDeCompras));

  }







  /**
   * Metodo que se encarga de crear un carrito de compras vacio y guardarlo en el local storage
   */
  iniciarCarritoDeCompras() {

    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));

    if(carritoStorage) {

      this.carritoDeCompras = carritoStorage;

      return;
    }

    localStorage.setItem('carrito', JSON.stringify( this.carritoDeCompras));

  }




   initialize(){
      const productoStore = JSON.parse(localStorage.getItem('carritoDeCompras'));
      if (productoStore !== null ) {
        this.carritoDeCompras = productoStore;
      }
      return this.carritoDeCompras;
   }


   /*
   Función que agrega en un array los productos que se agreguen en el carrito
   y....  
   */
  //  gestionarProductos(producto: Producto){

  //   const cantidadDeProductosEnCarrito = this.carritoDeCompras.productos.length;
    
  //   if (cantidadDeProductosEnCarrito === 0) {

  //     this.agregarProductoAlCarrito(producto);

  //   }else {

  //     let actualizarOk = false;

  //     // this.carritoDeCompras.products.forEach( (producto, indice) => {

  //     // });

  //     for (let i = 0; i < cantidadDeProductosEnCarrito; i++){

  //       //Comprobar que coincida el producto con alguno de la lista
  //       if ( producto._id === this.carritoDeCompras.productos[i]._id){
  //         //  console.log('Producto existente');
  //         //   if (producto.seleccionarCantidad === 0){
  //         //     console.log('Borrar item Seleccionado');
  //         //     //Quitar elemento
  //         //     this.carritoDeCompras.products.splice(i, 1);
  //           // }
  //       }else {//Actualizar con la información
  //         this.carritoDeCompras.productos[i]= producto;
  //       }
  //       actualizarOk = true;
  //       i = cantidadDeProductosEnCarrito;
  //     }
  //     if (!actualizarOk){
  //     this.agregarProductoAlCarrito(producto);

  //     }
  //   }
  //   localStorage.setItem('carritoDeCompras', JSON.stringify(this.carritoDeCompras));
  //  }


  //  agregarProductoAlCarrito(producto: Producto) {
  //   this.carritoDeCompras.productos.push(producto);
  //  }

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
