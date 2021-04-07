import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentosComponent } from './medicamentos.component';
import { AgregarProductosComponent } from './pages/agregar-productos/agregar-productos.component';


@NgModule({
  declarations: [MedicamentosComponent, AgregarProductosComponent],
  imports: [
    CommonModule,
    MedicamentosRoutingModule
  ]
})
export class MedicamentosModule { }
