import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Update2Page } from './update2.page';

const routes: Routes = [
  {
    path: '',
    component: Update2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Update2PageRoutingModule {}
