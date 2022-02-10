import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Web3Page } from './web3.page';

const routes: Routes = [
  {
    path: '',
    component: Web3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Web3PageRoutingModule {}
