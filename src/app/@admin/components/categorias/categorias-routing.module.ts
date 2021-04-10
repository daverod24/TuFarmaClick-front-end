import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { AgregarCategoriasComponent } from './pages/agregar-categorias/agregar-categorias.component';


const routes: Routes = [
  {
    path: '',
    component: CategoriasComponent
  },
  {
    path: 'agregarCategoria',
    component: AgregarCategoriasComponent
  },
  {
    path: 'editarCategoria/:_id',
    component: CategoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
