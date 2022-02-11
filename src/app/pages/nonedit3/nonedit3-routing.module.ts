import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nonedit3Page } from './nonedit3.page';

const routes: Routes = [
  {
    path: '',
    component: Nonedit3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nonedit3PageRoutingModule {}
