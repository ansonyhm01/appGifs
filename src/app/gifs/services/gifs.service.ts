import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  apiKey:string='x1nHwgh0B4kV4t9CdzWYXETnZvFDcCMx'
  servicioUrl:string='https://api.giphy.com/v1/gifs'
  private _historial:string[]=[]
  public resultado:Gif[]=[]
  get historial(){
    return [...this._historial]
  }

  constructor(private http:HttpClient) { 
    // this._historial=JSON.parse(localStorage.getItem('historial')!) || []
    if(localStorage.getItem('historial')){
      this._historial=JSON.parse(localStorage.getItem('historial')!)
    }
    if(localStorage.getItem('resultados')){
      this.resultado=JSON.parse(localStorage.getItem('resultados')!)
    }
  }

  
  buscargifs(query:string=''){
    query=query.trim().toLocaleUpperCase();
  
    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial=this._historial.splice(0,10)
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    const params=new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit',10)
      .set('q',query);
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params}).subscribe((respuesta:any)=>{
      this.resultado=respuesta.data
      localStorage.setItem('resultados',JSON.stringify(this.resultado))
      console.log(respuesta.data);
      
    });
    //fetch('https://api.giphy.com/v1/gifs/trending?api_key=x1nHwgh0B4kV4t9CdzWYXETnZvFDcCMx&q=dragon&limit=14').then((respuesta:Response)=>{
      //respuesta.json().then(data=>{
        //console.log('data',data);
     // })  
    //})

    // const resp=await fetch('https://api.giphy.com/v1/gifs/trending?api_key=x1nHwgh0B4kV4t9CdzWYXETnZvFDcCMx&q=dragon&limit=14')
    // const data=await resp.json();
    // console.log(data);
    
  }
}
