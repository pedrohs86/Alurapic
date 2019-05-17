import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  declarations: [PhotoDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [ PhotoDetailsComponent ]

})

export class PhotoDetailsModule { }
