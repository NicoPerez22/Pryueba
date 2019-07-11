import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdministrarEquipoComponent } from '../administrar-equipo/administrar-equipo.component';
import { ReportarPartidoComponent } from '../administrar-equipo/reportar-partido/reportar-partido.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'administrar-equipo',      component: AdministrarEquipoComponent },
    { path: 'reportar',      component: ReportarPartidoComponent },
    { path: 'login',      component: LoginComponent },
    { path: 'perfil',      component: ProfileComponent },

    //Admin Equipo
    { path: 'administrar-equipo/reportarpartido',      component: ReportarPartidoComponent },
];
