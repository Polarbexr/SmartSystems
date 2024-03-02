import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CloudComponent } from './cloud/cloud.component';
import { HomeComponent } from './home/home.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcademiaComponent } from './academia/academia.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cloud',component:CloudComponent},
  {path:'ayuda',component:AyudaComponent},
  {path:'contacto',component:ContactoComponent},
  {path: 'academia', component:AcademiaComponent},
  {path: 'nosotros', component:NosotrosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
