import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PhotoFormComponent } from './photo-form.component';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateDirectiveModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      VmessageModule,
      FormsModule,
      RouterModule,
      PhotoModule,
      ImmediateDirectiveModule
    ]
})
export class PhotoFormModule { }
