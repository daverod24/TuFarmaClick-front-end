import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidatorService } from 'src/app/@public/pages/forms/validators/services/validator.service';
import Swal from 'sweetalert2';
import { ProductosService } from '../../../../../@core/services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-medicamento',
  templateUrl: './editar-medicamento.component.html',
  styleUrls: ['./editar-medicamento.component.scss'],
})
export class EditarMedicamentoComponent implements OnInit {
  categorias: any[];
  imagenProducto: Array<File>;
  nuevoProducto = new FormData();
  categoria: string;
  productoId: string;

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
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productosService.getCategorias().subscribe((resp) => {
      this.categorias = resp.categorias;
    });

    this.activatedRoute.params.subscribe(({ _id }) => {
      this.productoId = _id;
    });

    this.activatedRoute.params
      .pipe(switchMap(({ _id }) => this.productosService.getProductoPorId(_id)))
      .subscribe((resp) => {
        this.categoria = resp.categoria._id;
        this.miFormulario.setValue({
          precio: resp.precio,
          nombre: resp.nombre,
          categoria: resp.categoria._id,
          img: [, []],
        });
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
      title: '¿Desea actuliar el producto?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Actualizar`,
      denyButtonText: `No actualizar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const { precio, nombre } = this.miFormulario.value;

        if (this.imagenProducto) {
          this.nuevoProducto.set('archivo', this.imagenProducto[0]);
        }

        this.nuevoProducto.set('precio', precio);
        this.nuevoProducto.set('nombre', nombre);
        this.nuevoProducto.set('categoria', this.categoria);

        console.log(this.nuevoProducto.get('precio'));

        // Registramos el nuevo producto
        this.productosService
          .actualizarProducto(this.productoId, this.nuevoProducto)
          .subscribe(
            (productoCreado) => {
              console.log(productoCreado);
              if (productoCreado) {
                Swal.fire('Producto actualizado con exito!', '', 'success');
                // this.miFormulario.reset();
              }
            },
            (err) => {
              console.log(err.error.msg);
              Swal.fire('Ha ocurrido un error: ' + err.error.msg, '', 'error');
            }
          );
      } else if (result.isDenied) {
        Swal.fire('Producto no actualizado', '', 'info');
      }
    });
  }

  asignarCategoria(categoria) {
    this.categoria = categoria;

    console.log(this.categoria);
  }

  capturarFile(event) {
    this.imagenProducto = <Array<File>>event.target.files;
  }
}
