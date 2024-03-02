import { Component } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';
@Component({
  selector: 'app-como-hacerlo',
  templateUrl: './como-hacerlo.component.html',
  styleUrl: './como-hacerlo.component.css'
})
export class ComoHacerloComponent {
  constructor( private _cargarScripts:CargarScriptsService){
    _cargarScripts.carga(["Academia/academia"]);


  }
  
}
