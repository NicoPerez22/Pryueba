import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AdministrarEquipoComponent } from './administrar-equipo/administrar-equipo.component';
import { ReportarPartidoComponent } from './administrar-equipo/reportar-partido/reportar-partido.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Shell/navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TorneoComponent } from './torneo/torneo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministrarEquipoComponent,
    ReportarPartidoComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    TorneoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
