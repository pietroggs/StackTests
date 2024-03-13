import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ativo } from '../models/ativo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtivosService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) {

  }

  getAllAtivos(): Observable<Ativo[]> {
    return this.http.get<Ativo[]>(this.baseApiUrl + '/api/ativos')
  }
  
  getAtivo(id: String): Observable<Ativo> {
    return this.http.get<Ativo>(this.baseApiUrl + '/api/Ativos/' + id)
  }

  addAtivo(addAtivoRequest: Ativo): Observable<Ativo> {
    addAtivoRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Ativo>(this.baseApiUrl + '/api/Ativos', addAtivoRequest)
  }

  updateAtivo(id: String, updateAtivoRequest: Ativo): Observable<Ativo>{
    return this.http.put<Ativo>(this.baseApiUrl + '/api/Ativos/' + id, updateAtivoRequest)
  }

  deleteAtivo(id: String): Observable<Ativo> {
    return this.http.delete<Ativo>(this.baseApiUrl + '/api/Ativos/' + id)
  }
}
