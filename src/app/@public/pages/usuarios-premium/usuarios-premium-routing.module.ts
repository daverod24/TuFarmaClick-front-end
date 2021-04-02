import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosPremiumComponent } from './usuarios-premium.component';


const routes: Routes = [
  {
    path: '', component: UsuariosPremiumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosPremiumRoutingModule { }
