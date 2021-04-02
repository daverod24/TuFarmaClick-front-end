import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentosComponent } from './medicamentos.component';


@NgModule({
  declarations: [MedicamentosComponent],
  imports: [
    CommonModule,
    MedicamentosRoutingModule
  ]
})
export class MedicamentosModule { }
