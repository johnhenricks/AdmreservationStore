import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Promo3PageRoutingModule } from './promo3-routing.module';

import { Promo3Page } from './promo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Promo3PageRoutingModule
  ],
  declarations: [Promo3Page]
})
export class Promo3PageModule {}
