import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonediiterationsPage } from './nonediiterations.page';

const routes: Routes = [
  {
    path: '',
    component: NonediiterationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonediiterationsPageRoutingModule {}
