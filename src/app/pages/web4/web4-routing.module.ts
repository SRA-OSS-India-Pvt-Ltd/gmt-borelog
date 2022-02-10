import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Web4Page } from './web4.page';

const routes: Routes = [
  {
    path: '',
    component: Web4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Web4PageRoutingModule {}
