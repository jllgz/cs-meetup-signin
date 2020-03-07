import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ViewsModule { }
