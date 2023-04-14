import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() seleccionados = new EventEmitter<any>();


  categoriaActual:string = 'general';
  paisActual:string = 'ar';
  
  categorias:any[] = [
    {value:"general", name:"General"},
    {value:"business", name:"Negocios"},
    {value:"entertainment", name:"Entretenimiento"},
    {value:"sports", name:"Deportes"}
  ];
  paises:any[] = [
    {value:"ar", name:"Argentina"},
    {value:"br", name:"Brazil"},
    {value:"fr", name:"Francia"},
    {value:"mx", name:"Mexico"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public encontrarResultados():void
  {
    const datosEnviar = {
      categoria: this.categoriaActual,
      pais: this.paisActual
    };
    this.seleccionados.emit(datosEnviar);
  }
}
