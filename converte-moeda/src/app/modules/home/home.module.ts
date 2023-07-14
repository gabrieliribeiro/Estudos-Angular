import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ResutsComponent } from './components/resuts/resuts.component';
import { AgrupadorComponent } from './agrupador/agrupador.component';



@NgModule({
  declarations: [
    FormComponent,
    ResutsComponent,
    AgrupadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
