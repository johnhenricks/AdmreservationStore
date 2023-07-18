import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowsPage } from './brows.page';

const routes: Routes = [
  {
    path: '',
    component: BrowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowsPageRoutingModule {}
