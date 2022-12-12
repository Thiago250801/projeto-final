import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IFilmeApi {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface ApiResult{
  page: number;
  results: IFilmeApi[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private dados: any = [];
  constructor(private http: HttpClient) { }

  guardarDados(index: string, dados: any): boolean {
    if (index) {
      this.dados[index] = dados;
      return true;
    } else {
      return false;
    }
  }

  pegarDados(index: string): any {
    if (index) {
      return this.dados[index];
    } else {
      return null;
    }
  }

  deletarDados(index: string): boolean {
    return delete this.dados[index];
  }
  getFilmesMaisVotados(page = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>
    (`${environment.baseUrl}/movie/popular?page=${page}&api_key=${environment.apiKey}&language=pt-BR`);
  }

  getDetalheFilme(id: string){
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}&language=pt-BR`
    );
  }

  buscarFilmes(busca : string):Observable<ApiResult>{
    const url = `${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&language=pt-BR&query=${busca}`;

    return this.http.get<ApiResult>(url).pipe(
      map(retorno => retorno),
    )
  }
}
