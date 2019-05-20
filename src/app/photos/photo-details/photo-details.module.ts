import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.Component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ]

})

export class PhotoDetailsModule { }
