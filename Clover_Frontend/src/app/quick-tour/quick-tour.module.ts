import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickTourPageRoutingModule } from './quick-tour-routing.module';

import { QuickTourPage } from './quick-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickTourPageRoutingModule
  ],
  declarations: [QuickTourPage]
})
export class QuickTourPageModule {}
