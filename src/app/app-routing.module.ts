import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SinginComponent } from './home/singin/singin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SingupComponent } from './home/singup/singup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children:
    [
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

  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: { photos: PhotoListResolver},
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
