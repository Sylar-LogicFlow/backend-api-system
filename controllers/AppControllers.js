// todo: controllers
// * AppControllers.js
const { orders, orderItems, users } = require("../Data/Data");
const { validationResult } = require("express-validator");

//* GET METHODS ALL (DB) LIKE FAKE.
//* orders
exports.getAllOrders = (req, res) => {
  const Orders = orders;

  if (Orders.length === 0)
    return res.status(400).json({ Message: "Not found Orders (or) Is Empty" });

  res.status(200).json({ Message: "Success All Orders", result: Orders });
};

// * ordreItems
exports.getAllorderItems = (req, res) => {
  const OrderItems = orderItems;

  if (OrderItems.length === 0)
    return res
      .status(400)
      .json({ Message: "Not Found OrderItems (or) its Empty" });

  res
    .status(200)
    .json({ Message: "Success Get All OrdersItems", result: OrderItems });
};
//* GET METHODS ALL (DB) LIKE FAKE.

// * get Methods
exports.getAllUsers = (req, res) => {
  res.status(200).json({ message: "Success all users", users });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  const user = users.filter((i) => i.id === id);

  if (user.length === 0)
    return res
      .status(400)
      .json({ message: "Fail", Result: "Not Found Id Users" });

  res.status(200).json({ message: "Success", Result: user });
};

exports.getAllordersForUser = (req, res) => {
  const id = req.params.id;
  const UserOrders = orders.filter((i) => i.userId === id);

  if (UserOrders.length === 0)
    return res
      .status(400)
      .json({ message: "Fail This user Not Have Orders Yet" });

  res
    .status(200)
    .json({ message: "Success", result: UserOrders.length, UserOrders });
};

exports.getSpecificOrderForUser = (req, res) => {
  const orderid = req.params.orderId;
  const order = orders.filter((i) => i.orderId === orderid);

  if (order.length === 0 || !order)
    return res.status(400).json({ message: "Fail", result: "order not found" });

  res.status(200).json({ message: "Success", result: order });
};

exports.getAllorderItemsForOrders = (req, res) => {
  const orderid = req.params.orderId;
  const orderitems = orderItems.filter((i) => i.orderId === orderid);

  if (orderitems.length === 0 || !orderItems)
    return res
      .status(400)
      .json({ message: "Fail", result: "Not Found orderItems" });

  res
    .status(200)
    .json({ message: "Success", result: orderitems.length, orderitems });
};

exports.getSpecificOrderItemForoRder = (req, res) => {
  const productId = req.params.productId;
  const orderitem = orderItems.find((i) => i.productId === productId);

  if (!orderitem || orderitem.length === 0)
    return res.status(400).json({ message: "Not found orderItem" });

  res.status(200).json({ message: "Success", result: orderitem });
};
// * get Methods ** \

// ==* Post Methos *== \
// * post user
exports.PostUser = (req, res) => {
  const Errors = validationResult(req);
  if (!Errors.isEmpty())
    return res
      .status(400)
      .json({ Message: "Error happend", result: Errors.array()[0].msg });

  const { name, email } = req.body;

  if (!name || !email)
    return res
      .status(400)
      .json({ Message: "You Should To fill out the feild first" });

  const NewUser = { id: "u" + Number(users.length + 1), name, email };
  users.push(NewUser);

  res.status(201).json({ Message: "Success Created NewUser", result: NewUser });
};

// * post to order
exports.PostOrder = (req, res) => {
  const Errors = validationResult(req);
  if (!Errors.isEmpty())
    return res
      .status(400)
      .json({ Message: "Error happend", result: Errors.array()[0].msg });

  const { userId, totalPrice, date } = req.body;

  if (userId.length === 0 || totalPrice.length === 0 || date.length === 0)
    return res.status(400).json({
      Message: "error catch check out the date and totalprice and userid first",
    });

  const NewOrder = {
    id: "o" + Number(orders.length + 1),
    userId,
    totalPrice,
    date,
  };

  orders.push(NewOrder);

  res
    .status(201)
    .json({ Message: "Success Created New order", result: NewOrder });
};

// * post to orderitem
exports.PostorderItem = (req, res) => {
  const Errors = validationResult(req);
  if (!Errors.isEmpty())
    return res
      .status(400)
      .json({ Message: "Error happend", result: Errors.array()[0].msg });

  const { orderId, quantity } = req.body;

  if (orderId.length === 0 || quantity.length === 0)
    return res
      .status(400)
      .json({ Message: "Error should you to feil out the feilds first" });

  const NewOrderItem = {
    productId: "p" + Number(orderItems.length + 1),
    orderId,
    quantity,
  };
  orderItems.push(NewOrderItem);

  res
    .status(201)
    .json({ Message: "Success Created New OrderItem", result: NewOrderItem });
};
// ==* Post Method *== \

// * Put Method * \
exports.UpdatedPutUser = (req, res) => {
  const Errors = validationResult(req);
  if (!Errors.isEmpty())
    return res
      .status(400)
      .json({ Message: "Error happend", result: Errors.array()[0].msg });

  const id = req.params.id;
  const idx = users.filter((i) => i.id === id);

  if (idx.length === 0 || !idx)
    return res.status(400).json({ message: "Not Found User" });

  const DataUpdated = req.body;

  if (!DataUpdated || DataUpdated.length === 0)
    return res
      .status(400)
      .json({ message: "Not Found You should to writeData to update" });

  users[idx] = { ...users[idx], ...DataUpdated };

  res.status(200).json({ message: "Success Updated", result: DataUpdated });
};

exports.UpdatedPutOrders = (req, res) => {
  const Errors = validationResult(req);
  if (!Errors.isEmpty())
    return res
      .status(400)
      .json({ Message: "Error happend", result: Errors.array()[0].msg });

  const userid = req.params.id;
  const IsOrder = orders.find((i) => i.userId === userid);

  if (IsOrder.length === 0 || !IsOrder)
    return res.status(400).json({ Message: "Not Found Order" });

  const UpdatedD = req.body;

  if (!UpdatedD || UpdatedD.length === 0)
    return res
      .status(400)
      .json({ Message: "Not Found Data You Should to write Data to Update" });

  orders[IsOrder] = { ...orders[IsOrder], ...UpdatedD };

  res.status(200).json({ Messge: "Success Put Data", result: UpdatedD });
};

exports.UpdatedPutOrderItems = (req, res) => {
  const Errors = validationResult(req);
  if (!Errors.isEmpty())
    return res
      .status(400)
      .json({ Message: "Error happend", result: Errors.array()[0].msg });

  const productid = req.params.productId;
  const orderItem = orderItems.filter((i) => i.productId === productid);

  if (!orderItem || orderItem.length === 0)
    return res.status(400).json({ Message: "Not Found OrderItem" });

  const UpdatedD = req.body;

  if (!UpdatedD || UpdatedD.length === 0)
    return res
      .status(400)
      .json({ Message: "Not Found Data Write Data to updated" });

  orderItems[orderItem] = { ...orderItems[orderItem], ...UpdatedD };

  res
    .status(200)
    .json({ Message: "Success Updated orderItem", result: UpdatedD });
};
// * Put Method ** \

// * Patch Method ** \
exports.UpdatedPatchUser = (req, res) => {
  const Errors = validationResult(req);
  if (!Errors.isEmpty())
    return res
      .status(400)
      .json({ Message: "Error happend", result: Errors.array()[0].msg });

  const id = req.params.id;
  const idx = users.filter((i) => i.id === id);

  if (idx.length === 0 || !idx)
    return res.status(400).json({ message: "Not Found User" });

  const DataUpdated = req.body;

  if (!DataUpdated || DataUpdated.length === 0)
    return res
      .status(400)
      .json({ message: "Not Found You should to writeData to update" });

  users[idx] = { ...users[idx], ...DataUpdated };

  res.status(200).json({ message: "Success Updated", result: DataUpdated });
};

exports.UpdatedPatchOrders = (req, res) => {
  const Errors = validationResult(req);
  if (!Errors.isEmpty())
    return res
      .status(400)
      .json({ Message: "Error happend", result: Errors.array()[0].msg });

  const userid = req.params.id;
  const IsOrder = orders.find((i) => i.userId === userid);

  if (IsOrder.length === 0 || !IsOrder)
    return res.status(400).json({ Message: "Not Found Order" });

  const UpdatedD = req.body;

  if (!UpdatedD || UpdatedD.length === 0)
    return res
      .status(400)
      .json({ Message: "Not Found Data You Should to write Data to Update" });

  orders[IsOrder] = { ...orders[IsOrder], ...UpdatedD };

  res.status(200).json({ Messge: "Success Patch Data", result: UpdatedD });
};

exports.UpdatedPatchOrderItems = (req, res) => {
  const Errors = validationResult(req);
  if (!Errors.isEmpty())
    return res
      .status(400)
      .json({ Message: "Error happend", result: Errors.array()[0].msg });

  const productid = req.params.productId;
  const orderItem = orderItems.filter((i) => i.productId === productid);

  if (!orderItem || orderItem.length === 0)
    return res.status(400).json({ Message: "Not Found OrderItem" });

  const UpdatedD = req.body;

  if (!UpdatedD || UpdatedD.length === 0)
    return res
      .status(400)
      .json({ Message: "Not Found Data Write Data to updated" });

  orderItems[orderItem] = { ...orderItems[orderItem], ...UpdatedD };

  res
    .status(200)
    .json({ Message: "Success Updated orderItem", result: UpdatedD });
};
// * Patch Method ** \

// * Delete Method ** \
exports.DeleteUser = (req, res) => {
  const id = req.params.id;
  const idx = users.find((i) => i.id === id);

  if (!idx || idx.length === 0)
    return res.status(400).json({ Message: "Not found Users" });

  const removed = users.splice(idx, 1);

  res.status(200).json({ message: "Success Deleted", removed });
};

exports.DeleteOrder = (req, res) => {
  const orderid = req.params.orderId;
  const idx = orders.find((i) => i.orderId === orderid);

  if (!idx || idx.length === 0)
    return res.status(400).json({ Message: "Not found Users" });

  const removed = orders.splice(idx, 1);

  res.status(200).json({ Message: "Success Deleted order", result: removed });
};

exports.DeleteOrderItem = (req, res) => {
  const productId = req.params.productId;
  const idx = orderItems.find((i) => i.productId === productId);

  if (!idx || idx.length === 0)
    return res.status(400).json({ Message: "Not found Users" });

  const removed = orderItems.splice(idx, 1);

  res
    .status(200)
    .json({ Message: "Success Deleted orderItem", result: removed });
};
// * Delete Method ** \
