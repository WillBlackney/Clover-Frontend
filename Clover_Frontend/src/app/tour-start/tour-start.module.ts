import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourStartPageRoutingModule } from './tour-start-routing.module';

import { TourStartPage } from './tour-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourStartPageRoutingModule
  ],
  declarations: [TourStartPage]
})
export class TourStartPageModule {}
