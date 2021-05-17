import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourStartPage } from './tour-start.page';

const routes: Routes = [
  {
    path: '',
    component: TourStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourStartPageRoutingModule {}
