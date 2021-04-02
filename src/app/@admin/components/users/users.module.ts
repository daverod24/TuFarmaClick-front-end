import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DetalleUsuarioComponent } from './pages/detalle-usuario/detalle-usuario.component';
import { ListarComponent } from './pages/listar/listar.component';


@NgModule({
  declarations: [DetalleUsuarioComponent, ListarComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }