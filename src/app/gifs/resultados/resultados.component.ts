import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  constructor(private gifsService:GifsService) { }
  get resultado(){
    return this.gifsService.resultado;
  }
  
  // getLista(){
  //   this.resultado=this.gifsService.resultado;
  //   console.log('los resultados',this.resultado);
    
  // }

}
