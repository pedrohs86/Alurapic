import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';



const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [LoginGuard],
      children: [
          {
              path: '',
              component: SinginComponent,
              data: { title: 'Login' }
          },
          {
              path: 'singup',
              component: SingupComponent,
              data: { title: 'Signup' }
          },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
