import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmindashbordPageRoutingModule } from './admindashbord-routing.module';

import { AdmindashbordPage } from './admindashbord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmindashbordPageRoutingModule
  ],
  declarations: [AdmindashbordPage]
})
export class AdmindashbordPageModule {}
