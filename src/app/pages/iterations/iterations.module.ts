import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IterationsPageRoutingModule } from './iterations-routing.module';

import { IterationsPage } from './iterations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IterationsPageRoutingModule
  ],
  declarations: [IterationsPage]
})
export class IterationsPageModule {}
