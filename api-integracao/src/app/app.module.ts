import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {HttpClientModule} from '@angular/common/http';
import { MenusModule } from './menus/menus.module';
import { PaisesModule } from './paises/paises.module';
import { UsersModule } from './users/users.module';
import { SpeedwayModule } from './speedway/speedway.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UsersModule,
    HttpClientModule,
    MenusModule,
    PaisesModule,
    SpeedwayModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
