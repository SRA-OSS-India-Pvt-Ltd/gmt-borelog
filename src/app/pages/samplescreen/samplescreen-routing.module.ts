import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplescreenPage } from './samplescreen.page';

const routes: Routes = [
  {
    path: '',
    component: SamplescreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplescreenPageRoutingModule {}
