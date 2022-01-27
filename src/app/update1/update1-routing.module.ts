import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Update1Page } from './update1.page';

const routes: Routes = [
  {
    path: '',
    component: Update1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Update1PageRoutingModule {}
