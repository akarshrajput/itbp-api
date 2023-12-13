const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const expenseRouter = require("./routes/expenseRouter");
app.use(express.json());
app.use("/api/v1/expenses", expenseRouter);
module.exports = app;
