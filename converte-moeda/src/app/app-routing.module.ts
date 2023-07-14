import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgrupadorComponent } from './modules/home/pages/home/agrupador/agrupador.component';

const routes: Routes = [
  {path: "", component: AgrupadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
