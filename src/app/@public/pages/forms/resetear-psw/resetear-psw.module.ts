import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetearPswRoutingModule } from './resetear-psw-routing.module';
import { ResetearPswComponent } from './resetear-psw.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ResetearPswComponent],
  imports: [
    CommonModule,
    ResetearPswRoutingModule,
    ReactiveFormsModule

  ]
})
export class ResetearPswModule { }
