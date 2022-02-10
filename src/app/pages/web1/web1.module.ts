import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Web1PageRoutingModule } from './web1-routing.module';

import { Web1Page } from './web1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Web1PageRoutingModule
  ],
  declarations: [Web1Page]
})
export class Web1PageModule {}
