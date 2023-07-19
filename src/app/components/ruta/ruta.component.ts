import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RutastService } from 'src/app/services/rutast.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  ruta:any={};
  constructor(private activatedRoute: ActivatedRoute, private _rutaService:RutastService, private location: Location){
    this.activatedRoute.params.subscribe(params =>{
      this.ruta= _rutaService.getRutaidx(params['id']);
      console.log(this.ruta);
    })
  }
  
  
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  
    goBack(): void {
      this.location.back();
  
  }}
