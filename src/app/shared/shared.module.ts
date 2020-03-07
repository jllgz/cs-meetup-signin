import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { AttButtonComponent } from './components/att-button/att-button.component';



@NgModule({
  declarations: [ButtonComponent, AttButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
