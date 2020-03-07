import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { AttButtonComponent } from './components/att-button/att-button.component';
import { FooterComponent } from './components/footer/footer.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [ButtonComponent, AttButtonComponent, FooterComponent],
  imports: [
    CommonModule,
    ButtonModule

  ], exports: [
    ButtonComponent,
    AttButtonComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
