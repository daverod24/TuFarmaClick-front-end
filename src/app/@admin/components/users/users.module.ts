import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DetalleUsuarioComponent } from './pages/detalle-usuario/detalle-usuario.component';
import { ListarComponent } from './pages/listar/listar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgregarUsuarioComponent } from './pages/agregar-usuario/agregar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DetalleUsuarioComponent, ListarComponent, AgregarUsuarioComponent],
  imports: [
    CommonModule,
    UsersRoutingModule, NgxPaginationModule,  ReactiveFormsModule
  ]
})
export class UsersModule { }