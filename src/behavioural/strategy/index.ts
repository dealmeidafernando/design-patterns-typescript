import { ECommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';
import { DiscountOne } from '../strategy/shopping-cart/strategies/discount-a';
import { DiscountTwo } from '../strategy/shopping-cart/strategies/discount-b';

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DiscountOne();
shoppingCart.discount = new DiscountTwo();
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
