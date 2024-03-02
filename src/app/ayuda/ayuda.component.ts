import { Component, OnInit} from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';
@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.css'
})
export class AyudaComponent implements OnInit {

  ngOnInit(): void {
  

  
  }

  constructor( private _cargarScripts:CargarScriptsService){
    _cargarScripts.carga(["Academia/academia"]);


  }

 
  
}
