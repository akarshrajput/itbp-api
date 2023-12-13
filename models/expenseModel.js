const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product must have a name"],
    trim: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
    required: [true, "Product must have a price"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  amount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  createdDate: {
    type: String,
  },
});

// Pre middleware to calculate the final amount
expenseSchema.pre("save", function (next) {
  const discountAmount = (this.discount / 100) * this.price;
  this.amount = this.quantity * (this.price - discountAmount);
  next();
});
expenseSchema.pre("save", function (next) {
  this.createdDate = new Date().toISOString().split("T")[0];
  next();
});
const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
