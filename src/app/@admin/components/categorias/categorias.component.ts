import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductosService } from 'src/app/@core/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  categorias: [];
  page: number = 1;
  categoriasCsv: Array<File>;
  catgorisDesdeCsvFormData = new FormData();

  miFormulario: FormGroup = this.fb.group({
    nombre: [''],
  });
  miFormularioArchivo: FormGroup = this.fb.group({
    archivo: [, []],
  });
  constructor(
    private productosService: ProductosService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias() {
    this.productosService.getCategorias().subscribe((resp) => {
      this.categorias = resp.categorias;
    });
  }

  //Eliminar categoria
  deleteCategoria(_id: string) {
    Swal.fire({
      title: '¿Esta Seguro de borrar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosService
          .deleteCategoria(_id)
          .subscribe((usuarioBorrado) => {
            this.actualizarCategorias();
          });
        Swal.fire('Borrado!', 'La categoria se borro con éxito.', 'success');
      }
    });
  }

  actualizarCategorias() {
    this.productosService.getCategorias().subscribe((resp) => {
      this.categorias = resp.categorias;
      console.log(resp);
    });
  }
  // Registramos el nuevo producto

  agregarCategoria() {
    Swal.fire({
      title: '¿Desea guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const body = {
          nombre: this.miFormulario.value,
        };
        // Registramos el nuevo producto
        this.productosService.createCategoria(body).subscribe(
          (categoriaCreado) => {
            console.log(categoriaCreado);
            if (categoriaCreado) {
              Swal.fire('Categoría guardada con exito!', '', 'success');
              this.miFormulario.reset();
            }
          },
          (err) => {
            console.log(err.error.msg);
            Swal.fire('Ha ocurrido un error: ' + err.error.msg, '', 'error');
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Producto no guardado', '', 'info');
      }
    });
  }

  insertarCategoriasDesdeCsv() {
    Swal.fire({
      title: '¿Desea guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (this.categoriasCsv) {
          this.catgorisDesdeCsvFormData.set('archivo', this.categoriasCsv[0]);
        }

        // Registramos el nuevo producto
        this.productosService
          .subirCategoriaDesdeCsv(this.catgorisDesdeCsvFormData)
          .subscribe(
            (result) => {
              if (result.ok) {
                Swal.fire('Producto guardado con exito!', '', 'success');
                this.miFormulario.reset();
                this.listarCategorias();
              } else {
                Swal.fire('Ha ocurrido un error: ' + result.msg, '', 'error');
              }
            },
            (err) => {
              console.log(err.error.msg);
              Swal.fire('Ha ocurrido un error: ' + err.error.msg, '', 'error');
            }
          );
      } else if (result.isDenied) {
        Swal.fire('Producto no guardado', '', 'info');
      }
    });
  }

  capturarFile(event) {
    this.categoriasCsv = <Array<File>>event.target.files;
  }
}
