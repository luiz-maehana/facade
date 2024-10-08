import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { PaymentService } from './payment.service';

@Injectable({
  providedIn: 'root',
})
export class ShopFacadeService {
  constructor(
    private authService: AuthenticationService,
    private paymentService: PaymentService
  ) {}

  purchase(user: string, password: string, amount: number): void {
    if (this.authService.login(user, password)) {
      this.paymentService.processPayment(amount);
      console.log('Compra realizada com sucesso.');
    } else {
      console.log('Falha na autenticação.');
    }
  }
}
