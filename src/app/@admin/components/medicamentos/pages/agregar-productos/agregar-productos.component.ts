import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidatorService } from 'src/app/@public/pages/forms/validators/services/validator.service';
import Swal from 'sweetalert2';
import { ProductosService } from '../../../../../@core/services/productos.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss'],
})
export class AgregarProductosComponent implements OnInit {
  imagenProducto: Array<File>;
  categorias: any[];
  categoria: string;

  nuevoProducto = new FormData();

  miFormulario: FormGroup = this.fb.group(
    {
      precio: [0, [Validators.required, Validators.min(0)]],
      nombre: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      img: [, []],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    // cargamos las categorias

    this.productosService.getCategorias().subscribe((resp) => {
      this.categorias = resp.categorias;
    });
  }
  //Validaciones campos de formulario
  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  registro() {
    Swal.fire({
      title: '¿Desea guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const { precio, nombre, categoria } = this.miFormulario.value;

        if (this.imagenProducto) {
          this.nuevoProducto.set('archivo', this.imagenProducto[0]);
        }

        this.nuevoProducto.set('precio', precio);
        this.nuevoProducto.set('nombre', nombre);
        this.nuevoProducto.set('categoria', this.categoria);

        // Registramos el nuevo producto
        this.productosService.createProducto(this.nuevoProducto).subscribe(
          (productoCreado) => {
            if (productoCreado) {
              Swal.fire('Producto guardado con exito!', '', 'success');
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

  capturarFile(event) {
    this.imagenProducto = <Array<File>>event.target.files;
  }

  asignarCategoria(categoria) {
    this.categoria = categoria;

    console.log(this.categoria);
  }
}
