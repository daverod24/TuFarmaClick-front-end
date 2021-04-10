import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuscripcionUsuariosPremiumComponent } from './suscripcion-usuarios-premium/suscripcion-usuarios-premium.component';
import { UsuariosPremiumComponent } from './usuarios-premium.component';


const routes: Routes = [
  {
    path: '', component: UsuariosPremiumComponent
  },
  {
    path: 'suscripcion', component: SuscripcionUsuariosPremiumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosPremiumRoutingModule { }
