import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { FilmeService } from 'src/app/services/filme.service';
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

  constructor(private filmeService: FilmeService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadFilmes()
    
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

}
