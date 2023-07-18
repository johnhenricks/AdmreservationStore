import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowsPageRoutingModule } from './brows-routing.module';

import { BrowsPage } from './brows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowsPageRoutingModule
  ],
  declarations: [BrowsPage]
})
export class BrowsPageModule {}
