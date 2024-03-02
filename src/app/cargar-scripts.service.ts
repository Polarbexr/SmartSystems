import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  carga(archivos:string[]){
     for(let archivo of archivos){
      let scripts = document.createElement("script");

      scripts.src = "./assets/JS/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild( scripts );

     }
  }
  recargar(archivos:string[]){
     for(let archivo of archivos){
      let scripts = document.createElement("script");

      scripts.src = "./assets/JS/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild( scripts );

     }
    }
}
