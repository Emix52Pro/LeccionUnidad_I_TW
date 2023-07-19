import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RutastService, ruta } from 'src/app/services/rutast.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  rutas: ruta[] = [];
  rutas2: ruta[] = [];

  constructor(private _rutasService: RutastService, private router: Router ) {
    this.rutas = this._rutasService.getRuta();
    this.rutas2 = this.rutas;
  }

  public search_string: string = '';

  updateSearchString(text: string) {
    this.search_string = text; // Actualizar el valor local de search_string
    this.filterResults();
  }

  filterResults() {
    if (!this.search_string) {
      this.rutas2 = this.rutas;
    } else {
      this.rutas2 = this.rutas.filter(
        (rutas) =>
        rutas?.Tipo.toLowerCase().includes(
            this.search_string.toLowerCase()
          )
      );
    }

    // Actualizar la variable en el servicio
    this._rutasService.updateRutas2(this.rutas2);
    this.router.navigate(['/rutas']);
  }
  
  


}
