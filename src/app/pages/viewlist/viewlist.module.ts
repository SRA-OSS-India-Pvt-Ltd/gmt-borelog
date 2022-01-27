import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewlistPageRoutingModule } from './viewlist-routing.module';

import { ViewlistPage } from './viewlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewlistPageRoutingModule
  ],
  declarations: [ViewlistPage]
})
export class ViewlistPageModule {}
