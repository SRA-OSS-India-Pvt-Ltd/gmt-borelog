import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplescreenPageRoutingModule } from './samplescreen-routing.module';

import { SamplescreenPage } from './samplescreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplescreenPageRoutingModule
  ],
  declarations: [SamplescreenPage]
})
export class SamplescreenPageModule {}
