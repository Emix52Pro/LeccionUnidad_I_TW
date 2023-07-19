import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutastService } from './services/rutast.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    RutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RutastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
