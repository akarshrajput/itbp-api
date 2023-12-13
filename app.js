const express = require("express");
const app = express();
const expenseRouter = require("./routes/expenseRouter");
app.use(express.json());
app.use("/api/v1/expenses", expenseRouter);
module.exports = app;
