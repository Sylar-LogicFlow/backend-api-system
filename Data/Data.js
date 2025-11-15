// * Data.js
// * fake data
const users = [
  { id: "u1", name: "Ahmed Ali", email: "ahmed@example.com" },
  { id: "u2", name: "Sara Mohamed", email: "sara@example.com" },
  { id: "u3", name: "Mahmoud Tarek", email: "mahmoud@example.com" },
];

const orders = [
  { orderId: "o1", userId: "u1", totalPrice: 1300, date: "2025-01-20" },
  { orderId: "o2", userId: "u2", totalPrice: 50, date: "2025-01-21" },
  { orderId: "o3", userId: "u1", totalPrice: 1100, date: "2025-01-22" },
];

const orderItems = [
  { orderId: "o1", productId: "p1", quantity: 1 },
  { orderId: "o1", productId: "p2", quantity: 2 },
  { orderId: "o2", productId: "p3", quantity: 1 },
  { orderId: "o3", productId: "p4", quantity: 1 },
];
// *

module.exports = { users, orders, orderItems };
