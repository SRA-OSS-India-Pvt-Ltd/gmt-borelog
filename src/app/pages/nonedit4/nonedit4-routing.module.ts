import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nonedit4Page } from './nonedit4.page';

const routes: Routes = [
  {
    path: '',
    component: Nonedit4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nonedit4PageRoutingModule {}
