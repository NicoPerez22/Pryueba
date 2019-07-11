import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportar-partido',
  templateUrl: './reportar-partido.component.html',
  styleUrls: ['./reportar-partido.component.css']
})
export class ReportarPartidoComponent implements OnInit {

  selecjugadores = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  seleccionarJugador() {
    this.selecjugadores = true;
  }

  reporteConfirmado() {
    this.router.navigateByUrl("/admin-equipo")
  }

}
