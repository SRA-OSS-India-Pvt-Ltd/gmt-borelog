import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nonedit4PageRoutingModule } from './nonedit4-routing.module';

import { Nonedit4Page } from './nonedit4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nonedit4PageRoutingModule
  ],
  declarations: [Nonedit4Page]
})
export class Nonedit4PageModule {}
