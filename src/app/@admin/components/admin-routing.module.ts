import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/@core/guards/admin.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AdminGuard ],
    canLoad: [ AdminGuard ],
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)
      },
      {
        path: 'medicamentos',
        loadChildren: () => import('./medicamentos/medicamentos.module').then(m => m.MedicamentosModule)
      }


      



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
