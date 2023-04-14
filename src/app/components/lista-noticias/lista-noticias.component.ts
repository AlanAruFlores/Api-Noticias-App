import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  @Input() listaNoticias:any[];

  constructor() { }
  ngOnInit(): void {
  }

}
