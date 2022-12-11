import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filmes',
    pathMatch: 'full'
  },
  {
    path: 'filmes',
    loadChildren: () => import('./pages/filmes/filmes.module').then( m => m.FilmesPageModule)
  },
  {
    path: 'filmes/:id',
    loadChildren: () => import('./pages/detalhe-filme/detalhe-filme.module').then( m => m.DetalheFilmePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
