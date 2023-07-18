import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Promo1Page } from './promo1.page';

const routes: Routes = [
  {
    path: '',
    component: Promo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Promo1PageRoutingModule {}
