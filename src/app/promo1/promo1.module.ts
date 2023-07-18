import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Promo1PageRoutingModule } from './promo1-routing.module';

import { Promo1Page } from './promo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Promo1PageRoutingModule
  ],
  declarations: [Promo1Page]
})
export class Promo1PageModule {}
