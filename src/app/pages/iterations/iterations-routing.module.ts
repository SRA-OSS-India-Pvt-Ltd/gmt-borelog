import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IterationsPage } from './iterations.page';

const routes: Routes = [
  {
    path: '',
    component: IterationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IterationsPageRoutingModule {}
