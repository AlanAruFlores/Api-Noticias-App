import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-noticias';
  resultadosNoticias:any[] = [];

  constructor(private api_noticias:NoticiasService){
  }
  mostrarDatos(seleccionados:any){
    console.log(seleccionados);
    this.api_noticias.obtenerNoticias(seleccionados).subscribe((resultado)=>{
      console.log(resultado);
      this.resultadosNoticias = resultado.articles;
    });
  }
}
