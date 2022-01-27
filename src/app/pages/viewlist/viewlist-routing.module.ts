import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewlistPage } from './viewlist.page';

const routes: Routes = [
  {
    path: '',
    component: ViewlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewlistPageRoutingModule {}
