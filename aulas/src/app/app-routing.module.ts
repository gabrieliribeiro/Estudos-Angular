import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { CalImcComponent } from './cal-imc/cal-imc.component';
import { ExemploClassComponent } from './exemplo-class/exemplo-class.component';
import { ExemploStyleComponent } from './exemplo-style/exemplo-style.component';
import { ExemploModelComponent } from './exemplo-model/exemplo-model.component';
import { ExemploIfComponent } from './exemplo-if/exemplo-if.component';
import { ExemploForComponent } from './exemplo-for/exemplo-for.component';
import { ExemploSwitchComponent } from './exemplo-switch/exemplo-switch.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { OrganoComponent } from './organo/organo.component';

const routes: Routes = [
  {path: "exemplo-binding", component: ExemploBindingComponent},
  {path: "cal-imc", component: CalImcComponent},
  {path: "exemplo-class", component: ExemploClassComponent},
  {path: "exemplo-style", component:ExemploStyleComponent},
  {path: "exemplo-model", component: ExemploModelComponent},
  {path: "exemplo-if", component: ExemploIfComponent},
  {path: "exemplo-for", component: ExemploForComponent},
  {path: "exemplo-switch", component: ExemploSwitchComponent},
  {path: "exemplo-pipes", component: ExemploPipesComponent},
  {path: "organo", component: OrganoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
