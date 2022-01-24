import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layer4Page } from './layer4.page';

const routes: Routes = [
  {
    path: '',
    component: Layer4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layer4PageRoutingModule {}
