import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Web2Page } from './web2.page';

const routes: Routes = [
  {
    path: '',
    component: Web2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Web2PageRoutingModule {}
