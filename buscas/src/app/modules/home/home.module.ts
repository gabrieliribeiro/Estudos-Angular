import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { AgrupadorComponent } from './pages/home/agrupador/agrupador.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    FormComponent,
    TabelaComponent,
    AgrupadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { } 
