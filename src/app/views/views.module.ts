import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';

import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SharedModule,
    
    InputTextModule
  ]
})
export class ViewsModule { }
