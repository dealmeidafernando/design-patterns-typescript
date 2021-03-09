import { DiscountStrategy } from '../discount-strategy';
import { ECommerceShoppingCart } from '../ecommerce-shopping-cart';

export class DiscountOne extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 200 && total < 300) {
      this.discount = 10;
    }

    return total - total * (this.discount / 100);
  }
}
