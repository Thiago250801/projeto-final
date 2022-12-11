import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/services/filme.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.page.html',
  styleUrls: ['./detalhe-filme.page.scss'],
})
export class DetalheFilmePage implements OnInit {
  filme : any = null;
  imageBaseUrl = environment.images;

  constructor(private route: ActivatedRoute, private filmeService : FilmeService) { }

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.filmeService.getDetalheFilme(id).subscribe((res) => {
      console.log(res);
      this.filme = res;
    });
  }

}
