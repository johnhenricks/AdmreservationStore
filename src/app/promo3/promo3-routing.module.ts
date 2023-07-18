import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Promo3Page } from './promo3.page';

const routes: Routes = [
  {
    path: '',
    component: Promo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Promo3PageRoutingModule {}
