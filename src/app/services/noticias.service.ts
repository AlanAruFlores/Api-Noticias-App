import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // Inyectamos el HttpClient
  // Nota: si pongo el modificador de acceso como parametro, TS me lo toma como si fuese atributo (atajo)
  constructor(private http:HttpClient) { }

  obtenerNoticias(parametros:any):Observable<any>{
    const REQUEST_GET=`https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=823c2aeec975415982c26e061b9f8c24`;
    return this.http.get(REQUEST_GET);
  }
}
