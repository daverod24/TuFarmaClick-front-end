import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/@core/services/productos.service';
import { Producto } from 'src/app/@core/interfaces/productos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss'],
})
export class MedicamentosComponent implements OnInit {
  listadoProductos: Producto[];
  page: number = 1;
  titulo: string = 'Medicamentos';
  regiones: string[];
  regionSelecciona: string;

  constructor(private productosservice: ProductosService) {}

  ngOnInit(): void {
    this.listarProductos();
    this.actualizarRegiones();
  }

  actualizarRegiones() {
    this.productosservice.getRegiones().subscribe((resp) => {
      this.regiones = resp.regiones;
    });
  }

  listarProductos() {
    this.productosservice.getMedicamentos().subscribe((resp) => {
      this.listadoProductos = resp.productos;
    });
  }

  listarMedicamentosPorRegion(region) {
    this.productosservice.getProducotsPorRegion(region).subscribe((resp) => {

      if(resp.ok) {

        console.log(resp.productos)
        this.listadoProductos =  resp.productos;

      }

    });
  }

  filtrarPorRegion(region) {
    console.log(region);
    this.regionSelecciona = region;

    if (region === '') {
      this.listarProductos();
    } else {
      this.listarMedicamentosPorRegion(region);
    }
  }

  cargarProductosSpreadsheets() {
    Swal.fire({
      title: `¿Esta seguro que desa actualizar? esta acción reiniciará la base de datos`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Cargar`,
      denyButtonText: `No cargar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosservice.cargarProductosSpreadsheets().subscribe(
          (resp) => {
            this.listarProductos();
            this.actualizarRegiones();

            if (resp.ok) {
              Swal.fire(`${resp.msg}`, '', 'success');
            } else if (!resp.ok) {
              Swal.fire(`${resp.msg}`, '', 'error');
            }
          },
          (err) => {
            Swal.fire(
              'Ha ocurrido un error inesperado al cargar en la base de datos',
              err,
              'error'
            );
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Medicamentos no cargados', '', 'info');
      }
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
        this.productosservice.deleteProducto(idProducto).subscribe(
          (resp) => {
            this.listarProductos();
          },
          (err) => {
            Swal.fire('Error al eliminar el producto', '', 'error');
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Medicamento no eliminado', '', 'info');
      }
    });
  }
}
