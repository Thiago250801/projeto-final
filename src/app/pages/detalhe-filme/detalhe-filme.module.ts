import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheFilmePageRoutingModule } from './detalhe-filme-routing.module';

import { DetalheFilmePage } from './detalhe-filme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheFilmePageRoutingModule
  ],
  declarations: [DetalheFilmePage]
})
export class DetalheFilmePageModule {}
