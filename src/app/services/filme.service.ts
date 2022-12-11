import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface ApiResult{
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }

  getFilmesMaisVotados(page = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>
    (`${environment.baseUrl}/movie/popular?page=${page}&api_key=${environment.apiKey}&language=pt-BR`);
  }

  getDetalheFilme(id: string){
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}&language=pt-BR`
    );
  }
}
