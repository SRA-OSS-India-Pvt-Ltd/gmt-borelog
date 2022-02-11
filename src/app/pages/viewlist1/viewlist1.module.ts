import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Viewlist1PageRoutingModule } from './viewlist1-routing.module';

import { Viewlist1Page } from './viewlist1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Viewlist1PageRoutingModule
  ],
  declarations: [Viewlist1Page]
})
export class Viewlist1PageModule {}
