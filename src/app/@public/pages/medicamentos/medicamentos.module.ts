import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentosComponent } from './medicamentos.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [MedicamentosComponent],
  imports: [
    CommonModule,
    MedicamentosRoutingModule,
    NgxPaginationModule
  ]
})
export class MedicamentosModule { }
