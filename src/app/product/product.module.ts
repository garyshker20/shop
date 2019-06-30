import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductPageComponent, ProductComponent]
})
export class ProductModule { }
