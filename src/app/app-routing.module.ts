import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { AboutComponent } from './components/about/about.component';
import { RutaComponent } from './components/ruta/ruta.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'rutas', component: RutasComponent}, 
  {path: 'about', component: AboutComponent}, 
  {path: 'ruta/:id', component: RutaComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
