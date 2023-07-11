import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JovemdevTitleComponent } from './jovemdev-title/jovemdev-title.component';
import { FormsModule } from '@angular/forms';
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
import { TimeFormatPipe } from './time-format.pipe';
import { MdPaiFilhoModule } from './md-pai-filho/md-pai-filho.module';
import { MdFilhoPaiModule } from './md-filho-pai/md-filho-pai.module';
import { MdServiceModule } from './md-service/md-service.module';
import { AtvModulosModule } from './atv-modulos/atv-modulos.module';

@NgModule({
  declarations: [
    AppComponent,
    JovemdevTitleComponent,
    ExemploBindingComponent,
    CalImcComponent,
    ExemploClassComponent,
    ExemploStyleComponent,
    ExemploModelComponent,
    ExemploIfComponent,
    ExemploForComponent,
    ExemploSwitchComponent,
    ExemploPipesComponent,
    MicroondasComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MdPaiFilhoModule,
    MdFilhoPaiModule,
    MdServiceModule,
    AtvModulosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
