import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/@core/services/productos.service';
import {  Producto} from 'src/app/@core/interfaces/productos.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss']
})
export class MedicamentosComponent implements OnInit {

  listadoProductos: Producto[];
  page: number= 1;
  titulo: string = "Medicamentos"


  constructor(
    private productosservice: ProductosService
  ) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {

    this.productosservice.getMedicamentos().subscribe((resp) => {
       this.listadoProductos = resp.productos;


    });
  }


  deleteProdcuto(idProducto: string, nombreMedicamento: string) {



    Swal.fire({
      title: `¿Desea eliminar el medicamento  ${nombreMedicamento}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
      denyButtonText: `No eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.productosservice.deleteProducto(idProducto).subscribe(resp => {

    this.listarProductos();


        }, err => {
          Swal.fire('Error al eliminar el producto', '', 'error');
        });
      } else if (result.isDenied) {
        Swal.fire('Medicamento no eliminado', '', 'info');
      }
    });






}
}