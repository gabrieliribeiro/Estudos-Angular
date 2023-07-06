import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { CalImcComponent } from './cal-imc/cal-imc.component';
import { ExemploClassComponent } from './exemplo-class/exemplo-class.component';
import { ExemploStyleComponent } from './exemplo-style/exemplo-style.component';
import { ExemploModelComponent } from './exemplo-model/exemplo-model.component';
import { ExemploIfComponent } from './exemplo-if/exemplo-if.component';

const routes: Routes = [
  {path: "exemplo-binding", component: ExemploBindingComponent},
  {path: "cal-imc", component: CalImcComponent},
  {path: "exemplo-class", component: ExemploClassComponent},
  {path: "exemplo-style", component:ExemploStyleComponent},
  {path: "exemplo-model", component: ExemploModelComponent},
  {path: "exemplo-if", component: ExemploIfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
