import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoreholeinformationPage } from './boreholeinformation.page';

const routes: Routes = [
  {
    path: '',
    component: BoreholeinformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoreholeinformationPageRoutingModule {}
