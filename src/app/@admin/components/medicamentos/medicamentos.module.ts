import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentosComponent } from './medicamentos.component';
import { AgregarProductosComponent } from './pages/agregar-productos/agregar-productos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditarMedicamentoComponent } from './pages/editar-medicamento/editar-medicamento.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MedicamentosComponent, AgregarProductosComponent, EditarMedicamentoComponent],
  imports: [
    CommonModule,
    MedicamentosRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule

    
  ]
})
export class MedicamentosModule { }
