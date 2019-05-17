import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';



const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children: [
          {
              path: '',
              component: SinginComponent,
          },
          {
              path: 'singup',
              component: SingupComponent,
          },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
