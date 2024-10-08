import { Component } from '@angular/core';
import { ShopComponent } from './components/shop/shop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-shop></app-shop>`,
  imports: [ShopComponent],
})
export class AppComponent {}
