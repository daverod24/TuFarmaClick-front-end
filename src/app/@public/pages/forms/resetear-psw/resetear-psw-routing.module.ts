import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetearPswComponent } from './resetear-psw.component';


const routes: Routes = [
  {
    path: '', component: ResetearPswComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetearPswRoutingModule { }
