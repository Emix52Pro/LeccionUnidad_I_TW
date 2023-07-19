import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutastService {

  public search_string:string = '';
  public rutas2:ruta[]=[];
  private rutas:ruta[]=[
    {
      CiudadOrigen: "Guayaquil",
      CiudadDestino: "Machala",
      PrecioRuta: "14$",
      Descripcion: "Una ruta que va de Guayaquil a Machala",
      Tipo: "Externo",
    },

    {
      CiudadOrigen: "Guayaquil",
      CiudadDestino: "SantaRosa",
      PrecioRuta: "16$",
      Descripcion: "Una ruta que va de Guayaquil a Machala",
      Tipo: "Externo",
    },

    {
      CiudadOrigen: "Guayaquil",
      CiudadDestino: "Riobamba",
      PrecioRuta: "17$",
      Descripcion: "Una ruta que va de Guayaquil a Riobamba",
      Tipo: "Externo",
    },

    {
      CiudadOrigen: "Machala",
      CiudadDestino: "SantaRosa",
      PrecioRuta: "5$",
      Descripcion: "Una ruta que va de Machala a SantaRosa",
      Tipo: "Externo",
    },


    {
      CiudadOrigen: "Machala",
      CiudadDestino: "Cuenca",
      PrecioRuta: "12$",
      Descripcion: "Una ruta que va de Machala a Cuenca",
      Tipo: "Externo",
    },


    {
      CiudadOrigen: "Cuenca",
      CiudadDestino: "Machala",
      PrecioRuta: "12$",
      Descripcion: "Una ruta que va de Cuenca a Machala",
      Tipo: "Interno",
    },

    {
      CiudadOrigen: "SantaRosa",
      CiudadDestino: "Machala",
      PrecioRuta: "5$",
      Descripcion: "Una ruta que va de SantaRosa a Machala",
      Tipo: "Interno",
    },


    {
      CiudadOrigen: "Riobamba",
      CiudadDestino: "Guayaquil",
      PrecioRuta: "17$",
      Descripcion: "Una ruta que va de Riobamba a Guayaquil",
      Tipo: "Externo",
    },

    {
      CiudadOrigen: "Machala",
      CiudadDestino: "Guayaquil",
      PrecioRuta: "13$",
      Descripcion: "Una ruta que va de Machala a Guayaquil",
      Tipo: "Interno",
    },

    {
      CiudadOrigen: "SantaRosa",
      CiudadDestino: "Guayaquil",
      PrecioRuta: "8$",
      Descripcion: "Una ruta que va de SantaRosa a Guayaquil",
      Tipo: "Interno",
    } ];

    private rutas2S: BehaviorSubject<ruta[]> = new BehaviorSubject<ruta[]>([]);
  
    getRutas2Observable(): Observable<ruta[]> {
      return this.rutas2S.asObservable();
    }
  
    updateRutas2(rutas2: ruta[]): void {
      this.rutas2 = rutas2;
      this.rutas2S.next(this.rutas2);
    }
  
    getRuta()
    {
      return this.rutas;
    }
  
    getRutas2()
    {
      return this.rutas2;
    }
    
    constructor() { 
      this.rutas2 = this.rutas;
      console.log("Servicio listo para usar...");
      console.log( this.search_string);
    
    }
    
    getRutaidx(idx: number):ruta{
      return this.rutas2[idx];
    }



}

export interface ruta{
  CiudadOrigen: string;
  CiudadDestino: string;
  PrecioRuta: string;
  Descripcion: string;
  Tipo: string;
}
