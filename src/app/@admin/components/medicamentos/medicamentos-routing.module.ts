import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicamentosComponent } from './medicamentos.component';
import { AgregarProductosComponent } from './pages/agregar-productos/agregar-productos.component';


const routes: Routes = [
  {
    path: '',
    component: MedicamentosComponent
  },
  {
    path: 'agregarprd',
    component: AgregarProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
