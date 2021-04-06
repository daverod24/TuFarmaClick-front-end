import { Component, OnInit } from '@angular/core';
import {  Producto} from 'src/app/@core/interfaces/productos.interface';
import { ProductosService } from 'src/app/@core/services/productos.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss']
})
export class MedicamentosComponent implements OnInit {

  listadoProductos: Producto[];
  page: number= 1;

  constructor( private productosservice: ProductosService) { }

  ngOnInit(): void {

    this.listarProductos();
  }


  listarProductos() {

    this.productosservice.getMedicamentos().subscribe((resp) => {
       this.listadoProductos = resp.productos;


    });
  }

}
