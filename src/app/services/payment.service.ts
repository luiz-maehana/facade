import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$${amount}`);
  }
}
