import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddShopPageRoutingModule } from './add-shop-routing.module';

import { AddShopPage } from './add-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddShopPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddShopPage]
})
export class AddShopPageModule {}
