import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginModule } from './forms/login/login.module';
import { RegisterModule } from './forms/register/register.module';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./forms/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./forms/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'medicamentos',
        loadChildren: () => import('./medicamentos/medicamentos.module').then(m => m.MedicamentosModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('./usuarios-premium/usuarios-premium.module').then(m => m.UsuariosPremiumModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'resetearpsw',
        loadChildren: () => import('./forms/resetear-psw/resetear-psw.module').then(m => m.ResetearPswModule)
      },
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
