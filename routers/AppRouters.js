// todo : routers
// AppRouters.js
const express = require("express");
const routers = express.Router();
const controllersapp = require("../controllers/AppControllers");
const { body } = require("express-validator");

//* GET METHODS ALL (DB) LIKE FAKE.
routers.get("/Orders", controllersapp.getAllOrders);

routers.get("/OrderItems", controllersapp.getAllorderItems);
//* GET METHODS ALL (DB) LIKE FAKE.

// * get Methods
routers.get("/", controllersapp.getAllUsers);

routers.get("/:id", controllersapp.getUserById);

routers.get("/:id/orders", controllersapp.getAllordersForUser);

routers.get("/:id/orders/:orderId", controllersapp.getSpecificOrderForUser);

routers.get(
  "/:id/orders/:orderId/orderItems",
  controllersapp.getAllorderItemsForOrders
);

routers.get(
  "/:id/orders/:orderId/orderItems/:productId",
  controllersapp.getSpecificOrderItemForoRder
);
// * get Methods ** \\

// * Post Method * \
routers.post(
  "/PostUser",
  [
    body("name")
      .isLength({ min: 4 })
      .isString()
      .withMessage("Name Should be More or equel then 4 letters"),
    body("email")
      .isEmail()
      .isString()
      .withMessage(
        "Make Sure You write a right Email should be with (@gamil.com)"
      ),
  ],
  controllersapp.PostUser
);

routers.post(
  "/orders/PostOrder",
  [
    body("totalPrice").isFloat().isInt().withMessage("Should be Number"),
    body("date").isDate().isString().withMessage("Should be right Date"),
  ],
  controllersapp.PostOrder
);

routers.post(
  "/orderitems/PostOrderitem",
  [body("quantity").isInt().withMessage("Should Be number")],
  controllersapp.PostorderItem
);
// * Post Method * \

// * Put Method * \
routers.put(
  "/:id/PutUser",
  [
    body("name")
      .isLength({ min: 4 })
      .isString()
      .withMessage("Name Should be More or equel then 4 letters"),
    body("email")
      .isEmail()
      .isString()
      .withMessage(
        "Make Sure You write a right Email should be with (@gamil.com)"
      ),
  ],
  controllersapp.UpdatedPutUser
);

routers.put(
  "/:id/orders/:orderId/PutOrder",
  [
    body("totalPrice").isFloat().isInt().withMessage("Should be Number"),
    body("date").isDate().isString().withMessage("Should be right Date"),
  ],
  controllersapp.UpdatedPutOrders
);

routers.put(
  "/orderitems/:productId/PutOrderItem",
  [body("quantity").isInt().withMessage("Should Be number")],
  controllersapp.UpdatedPutOrderItems
);
// * Put Method * \

// * Patch Method * \\
routers.patch(
  "/:id/PatchUser",
  [
    body("name")
      .isLength({ min: 4 })
      .isString()
      .withMessage("Name Should be More or equel then 4 letters"),
    body("email")
      .isEmail()
      .isString()
      .withMessage(
        "Make Sure You write a right Email should be with (@gamil.com)"
      ),
  ],
  controllersapp.UpdatedPatchUser
);

routers.patch(
  "/:id/orders/:orderId/PatchOrder",
  [
    body("totalPrice").isFloat().isInt().withMessage("Should be Number"),
    body("date").isDate().isString().withMessage("Should be right Date"),
  ],
  controllersapp.UpdatedPatchOrders
);

routers.patch(
  "/orderitems/:productId/PatchOrderItem",
  [body("quantity").isInt().withMessage("Should Be number")],
  controllersapp.UpdatedPatchOrderItems
);
// * Patch Method * \\

// * Delete Method * \\
routers.delete("/:id/DeleteUser", controllersapp.DeleteUser);

routers.delete("/orders/:orderId/DeleteOrder", controllersapp.DeleteOrder);

routers.delete(
  "/orderitems/:productId/DeleteOrderItem",
  controllersapp.DeleteOrderItem
);
// * Delete Method * \\

module.exports = routers;
