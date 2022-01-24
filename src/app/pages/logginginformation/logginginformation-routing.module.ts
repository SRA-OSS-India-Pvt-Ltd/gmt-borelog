import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogginginformationPage } from './logginginformation.page';

const routes: Routes = [
  {
    path: '',
    component: LogginginformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogginginformationPageRoutingModule {}
