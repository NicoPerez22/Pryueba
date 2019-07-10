import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AdministrarEquipoComponent } from './administrar-equipo/administrar-equipo.component';
import { ReportarPartidoComponent } from './administrar-equipo/reportar-partido/reportar-partido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministrarEquipoComponent,
    ReportarPartidoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
