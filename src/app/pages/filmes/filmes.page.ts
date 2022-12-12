import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import {ApiResult, FilmeService, IFilmeApi} from 'src/app/services/filme.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  filmes : any [] = [];
  currentPage = 1;
  imageBaseUrl = environment.images
  listarFilmes: ApiResult;

  constructor(private filmeService: FilmeService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadFilmes()
  }

  defaultTermo(event : any){
    const busca = event.target.value;
    if (busca == 0){
      this.loadFilmes();
    }
  }

  buscarFilmes(event: any) {
    console.log(event.target.value);
    const busca = event.target.value;
    if (busca && busca.length > 0) {
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
          console.log(dados);
          this.listarFilmes = dados;
        }
      );
    } else {
      this.defaultTermo(event);
    }
  }
  async loadFilmes(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: 'Carregando...',
      spinner: 'bubbles',
    })
    await loading.present();

    this.filmeService.getFilmesMaisVotados(this.currentPage).subscribe(res => {
      loading.dismiss();
      this.filmes.push(...res.results);
      console.log(res)

      event?.target.complete();
      if (event){
        event.target.disabled = res.total_pages === this.currentPage;
      }
    })
  }

  loadMore(event: InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadFilmes(event);
  }

  exibirFilme(filme: IFilmeApi) {
    this.filmeService.guardarDados('filme', filme);
  }
}
