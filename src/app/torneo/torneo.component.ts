import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.css']
})
export class TorneoComponent implements OnInit {

  equipoArray = [{id: 1, nombre: 'NicoPerez22'},
  {id: 2, nombre: 'AllboysFloresta1'},
  {id: 3, nombre: 'GrimmjowVI6'},
  {id: 4, nombre: 'Nachoo_011'},
  {id: 5, nombre: 'Franchy10_'},
  {id: 6, nombre: 'Guiidow'},
  {id: 7, nombre: 'Menardi04'},
  {id: 8, nombre: 'Cabers'},
  {id: 9, nombre: 'Ferpwnt'},]
  
  constructor() { }

  ngOnInit() {
  }

}
