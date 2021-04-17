import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppinCartComponent } from './shoppin-cart.component';


@NgModule({
  declarations: [ShoppinCartComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ShoppinCartComponent
  ]
})
export class ShoppinCartModule { }
