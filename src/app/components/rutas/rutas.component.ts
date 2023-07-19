
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RutastService, ruta } from 'src/app/services/rutast.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnDestroy {
  rutas2: ruta[] = [];
  private rutasSubscription: Subscription;

  constructor(
    private _rutastService: RutastService,
    private router: Router
  ) {
    // Suscribirse a los cambios en el arreglo heroes2 del servicio
    this.rutasSubscription = this._rutastService.getRutas2Observable().subscribe(
      (rutas) => {
        this.rutas2 = rutas;
      }
    );

    // Detectar cambios de ruta para refrescar la vista cuando se navegue a la página de "heroes"
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/rutas') {
        this.refreshrutas();
      }
    });
  }
  ngOnInit(): void {

    this.rutas2 = this._rutastService.getRutas2();
  }

  ngOnDestroy(): void {
    // Cancelar la suscripción al destruir el componente
    this.rutasSubscription.unsubscribe();
  }

  refreshrutas() {
    this.rutas2 = this._rutastService.getRutas2();
  }

  verRuta(idx: number) {
    console.log(idx);
    this.router.navigate(['/ruta', idx]);
  }
}
