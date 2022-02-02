import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Update4Page } from './update4.page';

const routes: Routes = [
  {
    path: '',
    component: Update4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Update4PageRoutingModule {}
