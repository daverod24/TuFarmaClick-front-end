import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosPremiumRoutingModule } from './usuarios-premium-routing.module';
import { UsuariosPremiumComponent } from './usuarios-premium.component';


@NgModule({
  declarations: [UsuariosPremiumComponent],
  imports: [
    CommonModule,
    UsuariosPremiumRoutingModule
  ]
})
export class UsuariosPremiumModule { }
