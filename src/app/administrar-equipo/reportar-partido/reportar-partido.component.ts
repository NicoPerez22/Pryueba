import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/Models/jugador-Model';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reportar-partido',
  templateUrl: './reportar-partido.component.html',
  styleUrls: ['./reportar-partido.component.css']
})
export class ReportarPartidoComponent implements OnInit {

  selecjugadores = false;
  jugadores: Jugador[]
  jugador: Jugador;
  jug = new Jugador();

  tipoArray = [{id: 1, nombre: 'GK'},
  {id: 2, nombre: 'DFC'},
  {id: 3, nombre: 'DFI'},
  {id: 4, nombre: 'DFD'},
  {id: 5, nombre: 'MD'},
  {id: 6, nombre: 'MCD'},
  {id: 7, nombre: 'MI'},
  {id: 8, nombre: 'MCO'},
  {id: 9, nombre: 'DC'},]

  calificacionArray = [{id: 1, nombre: '1.0'},
  {id: 2, nombre: '2.0'},
  {id: 3, nombre: '3.0'},
  {id: 4, nombre: '4.0'},
  {id: 5, nombre: '5.0'},
  {id: 6, nombre: '6.0'},
  {id: 7, nombre: '7.0'},
  {id: 8, nombre: '8.0'},
  {id: 9, nombre: '9.0'},]

  equipoArray = [{id: 1, nombre: 'NicoPerez22'},
  {id: 2, nombre: 'AllboysFloresta1'},
  {id: 3, nombre: 'GrimmjowVI6'},
  {id: 4, nombre: 'Nachoo_011'},
  {id: 5, nombre: 'Franchy10_'},
  {id: 6, nombre: 'Guiidow'},
  {id: 7, nombre: 'Menardi04'},
  {id: 8, nombre: 'Cabers'},
  {id: 9, nombre: 'Ferpwnt'},]

  


  @Input()
  _data: Jugador;

  @Output()
  agreJugador: EventEmitter<Jugador> = new EventEmitter<Jugador>();

  constructor(private router:Router, private fb: FormBuilder) { }

  ngOnInit() {
    // this.jug = {
    //   id:'',
    //   PSNID: '',
    //   posicion: '',
    //   calificacion: '',
    //   goles:'',
    //   asistencias: '',
    //   tarjetas: '',
    // };
    // this.jugadores = [];
  }

  onSubmitJugador(reportar: NgForm) {
    console.log(reportar.value)
  }

  reporteConfirmado() {
    this.router.navigateByUrl("/admin-equipo")
  }

}
