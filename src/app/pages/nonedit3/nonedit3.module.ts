import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nonedit3PageRoutingModule } from './nonedit3-routing.module';

import { Nonedit3Page } from './nonedit3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nonedit3PageRoutingModule
  ],
  declarations: [Nonedit3Page]
})
export class Nonedit3PageModule {}
