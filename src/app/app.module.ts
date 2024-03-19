import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ComoHacerloComponent } from './como-hacerlo/como-hacerlo.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { FooterComponent } from './footer/footer.component';
import { CloudComponent } from './cloud/cloud.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { DescargasComponent } from './descargas/descargas.component';
import { AcademiaComponent } from './academia/academia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';

//inicio service
import { CargarScriptsService } from './cargar-scripts.service';
import { VistaAdasComponent } from './vista-adas/vista-adas.component';
//fin service

const appRoutes:Routes=[

  {path:'',component:HomeComponent},
  {path:'cloud',component:CloudComponent},
  {path:'ayuda',component:AyudaComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'adas',component:VistaAdasComponent}

];

@NgModule({
  declarations: [
    AppComponent,           
    NavbarComponent,      
    ServiciosComponent,    
    ComoHacerloComponent,
    BeneficiosComponent,
    FooterComponent,
    CloudComponent,
    HomeComponent,
    SliderComponent,
    AyudaComponent,
    DescargasComponent,
    AcademiaComponent,
    ContactoComponent,
    NosotrosComponent,
    VistaAdasComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    CargarScriptsService,
    {
    provide:LocationStrategy,
    useClass:HashLocationStrategy,

  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
  