import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YettosubmitPage } from './yettosubmit.page';

const routes: Routes = [
  {
    path: '',
    component: YettosubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YettosubmitPageRoutingModule {}
