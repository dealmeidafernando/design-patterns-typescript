import { ShoppingOrder } from './shopping-order/shopping-order';

// const order = new ShoppingOrder(); // Pending
// order.approvePayment(); // Approved
// order.shipOrder(); // Send order

// const order = new ShoppingOrder(); // Pending
// order.approvePayment(); // Approved
// order.waitPayment(); // Pending
// order.shipOrder(); // Send order

const order = new ShoppingOrder(); // Pending
order.approvePayment(); // Approved
order.waitPayment(); // Pending
order.shipOrder(); // Send order
order.rejectPayment(); // Rejected finish
order.approvePayment();
order.waitPayment();
order.shipOrder();
