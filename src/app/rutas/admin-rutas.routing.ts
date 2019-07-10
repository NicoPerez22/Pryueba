import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdministrarEquipoComponent } from '../administrar-equipo/administrar-equipo.component';
import { ReportarPartidoComponent } from '../administrar-equipo/reportar-partido/reportar-partido.component';


export const AdminLayoutRoutes: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'administrar-equipo',      component: AdministrarEquipoComponent },
    { path: 'reportar',      component: ReportarPartidoComponent },
    // { path: 'administrar-equipo',      component: AdministrarEquipoComponent },
    // { path: 'administrar-equipo',      component: AdministrarEquipoComponent },
];
