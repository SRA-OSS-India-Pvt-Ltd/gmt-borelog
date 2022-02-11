import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Viewlist1Page } from './viewlist1.page';

const routes: Routes = [
  {
    path: '',
    component: Viewlist1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Viewlist1PageRoutingModule {}
