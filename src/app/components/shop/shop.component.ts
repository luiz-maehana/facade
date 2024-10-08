import { Component } from '@angular/core';
import { ShopFacadeService } from '../../services/shop-facade.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  constructor(private shopFacade: ShopFacadeService) {}

  buy(): void {
    this.shopFacade.purchase('admin', 'admin', 100);
  }
}
