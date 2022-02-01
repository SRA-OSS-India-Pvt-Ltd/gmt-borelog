import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Update3Page } from './update3.page';

const routes: Routes = [
  {
    path: '',
    component: Update3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Update3PageRoutingModule {}
