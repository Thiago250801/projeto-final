import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheFilmePage } from './detalhe-filme.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheFilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheFilmePageRoutingModule {}
