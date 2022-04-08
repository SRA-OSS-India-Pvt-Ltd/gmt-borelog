import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdititerationsPage } from './edititerations.page';

const routes: Routes = [
  {
    path: '',
    component: EdititerationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdititerationsPageRoutingModule {}
