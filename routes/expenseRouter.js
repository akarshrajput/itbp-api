const express = require("express");
const expenseController = require("./../controller/expenseController");
const router = express.Router();

router
  .route("/")
  .get(expenseController.getAllExpenses)
  .post(expenseController.createExpense);
router.route("/:id").get(expenseController.getExpense);

module.exports = router;
