import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickTourPage } from './quick-tour.page';

const routes: Routes = [
  {
    path: '',
    component: QuickTourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickTourPageRoutingModule {}
