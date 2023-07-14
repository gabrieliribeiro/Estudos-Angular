import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ResutsComponent } from './components/resuts/resuts.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgrupadorComponent } from './pages/home/agrupador/agrupador.component';


@NgModule({
  declarations: [
    FormComponent,
    ResutsComponent,
    AgrupadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
