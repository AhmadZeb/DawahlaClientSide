import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponentComponent } from './components/orderComponent/order-component/order-component.component';
import { UserComponentComponent } from './components/userComponent/user-component/user-component.component';
import { ProductComponentComponent } from './components/productComponent/product-component/product-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponentComponent,
    UserComponentComponent,
    ProductComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
