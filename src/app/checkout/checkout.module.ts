import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { InformationFormComponent } from './information-form/information-form.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ],
  declarations: [CheckoutComponent, CheckoutPageComponent, InformationFormComponent, ShippingComponent, PaymentComponent]
})
export class CheckoutModule { }
