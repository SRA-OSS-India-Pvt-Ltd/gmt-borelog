import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nonedit1Page } from './nonedit1.page';

const routes: Routes = [
  {
    path: '',
    component: Nonedit1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nonedit1PageRoutingModule {}
