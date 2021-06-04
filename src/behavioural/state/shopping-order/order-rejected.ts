import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não posso aprovar. O pagamento foi recusado.');
  }

  rejectPayment(): void {
    console.log('Não posso aprovar. O pagamento já está recusado.');
  }

  waitPayment(): void {
    console.log('Não posso mover para pendente. O pagamento foi recusado.');
  }

  shipOrder(): void {
    console.log('Não posso enviar. O pagamento foi recusado.');
  }
}
