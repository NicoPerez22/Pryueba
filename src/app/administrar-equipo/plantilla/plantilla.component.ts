import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  constructor() { }


  equipoArray = [{id: 1, nombre: 'NicoPerez22'},
  {id: 2, nombre: 'AllboysFloresta1'},
  {id: 3, nombre: 'GrimmjowVI6'},
  {id: 4, nombre: 'Nachoo_011'},
  {id: 5, nombre: 'Franchy10_'},
  {id: 6, nombre: 'Guiidow'},
  {id: 7, nombre: 'Menardi04'},
  {id: 8, nombre: 'Cabers'},
  {id: 9, nombre: 'Ferpwnt'},]
  
  ngOnInit() {
  }

}
