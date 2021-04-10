import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosPremiumRoutingModule } from './usuarios-premium-routing.module';
import { UsuariosPremiumComponent } from './usuarios-premium.component';
import { SuscripcionUsuariosPremiumComponent } from './suscripcion-usuarios-premium/suscripcion-usuarios-premium.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsuariosPremiumComponent, SuscripcionUsuariosPremiumComponent],
  imports: [
    CommonModule,
    UsuariosPremiumRoutingModule, 
    ReactiveFormsModule
  ]
})
export class UsuariosPremiumModule { }
