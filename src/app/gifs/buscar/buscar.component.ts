import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) {
   } 

  ngOnInit(): void {
  }
  buscar(){  
    const valor1=this.txtBuscar.nativeElement.value
    if(valor1.trim().length==0){
      return
    }
    //console.log('->>',valor1);
    this.gifsService.buscargifs(valor1);
    this.txtBuscar.nativeElement.value=''
    
  }
  

}
