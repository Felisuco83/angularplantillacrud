import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable()
export class PersonaService {
  private url: string;
  constructor(private _httpclient: HttpClient) {
    this.url = Global.urlplantilla;
  }

  getAll(): Observable<any> {
    var request = '/api/Plantilla';
    return this._httpclient.get(this.url + request);
  }

  getOne(id: string): Observable<any> {
    var request = '/api/Plantilla/' + id;
    return this._httpclient.get(this.url + request);
  }

  getFunciones(): Observable<any> {
    var request = '/api/Plantilla/Funciones';
    return this._httpclient.get(this.url + request);
  }

  modSalary(funcion: string, incremento: string): Observable<any> {
    var request = '/api/plantilla/' + funcion + '/' + incremento;
    var json = JSON.stringify({
      funcion: 'funcion',
      incremento: parseInt(incremento),
    });
    return this._httpclient.put(this.url + request, '');
  }

  getByFuncion(funcion: string): Observable<any> {
    var request = '/api/plantilla/plantillafuncion/' + funcion;
    return this._httpclient.get(this.url + request);
  }
}
