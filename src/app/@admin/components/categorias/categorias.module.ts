import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { AgregarCategoriasComponent } from './pages/agregar-categorias/agregar-categorias.component';
import { EditarCategoriasComponent } from './pages/editar-categorias/editar-categorias.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoriasComponent, AgregarCategoriasComponent, EditarCategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
