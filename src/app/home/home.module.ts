import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { SinginComponent } from './singin/singin.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SingUpService } from './singup/singup.service';

@NgModule({
    declarations: [
        SinginComponent,
        SingupComponent,
        HomeComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      VmessageModule,
      RouterModule,
      HomeRoutingModule
    ],
    providers: [
      SingUpService
    ],

})

export class HomeModule {}
