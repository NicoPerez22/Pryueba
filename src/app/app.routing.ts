import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminRutasModule } from './rutas/admin-rutas.module';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
     children: [
       {
         path: '',
         loadChildren: './rutas/admin-rutas.module#AdminRutasModule'
       }
     ]
  },
 {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AdminRutasModule
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
