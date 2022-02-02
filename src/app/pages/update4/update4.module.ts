import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Update4PageRoutingModule } from './update4-routing.module';

import { Update4Page } from './update4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Update4PageRoutingModule
  ],
  declarations: [Update4Page]
})
export class Update4PageModule {}
