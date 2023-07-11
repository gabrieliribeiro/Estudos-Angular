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
import { MicroondasComponent } from './microondas/microondas.component';
import { CpPaiComponent } from './md-pai-filho/cp-pai/cp-pai.component';
import { CpPaiComponent as CpPaiComponent2} from './md-filho-pai/cp-pai/cp-pai.component';
import { CpAgruparComponent } from './md-service/cp-agrupar/cp-agrupar.component';

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
  {path: "microondas", component:MicroondasComponent},
  {path: "pai-filho", component: CpPaiComponent},
  {path: "filho-pai", component: CpPaiComponent2},
  {path: "service", component: CpAgruparComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
