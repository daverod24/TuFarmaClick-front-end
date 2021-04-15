import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  productosAgregados: number = 0;
  total: number = 0;
  precio: number = 25;

  get getProductosAgregados() {
    return this.productosAgregados;
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

  

  constructor() { }

  ngOnInit(): void {
  }

}
