const Expense = require("./../models/expenseModel");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllExpenses = async (req, res) => {
  try {
    const features = new APIFeatures(Expense.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const expenses = await features.query;
    res.status(200).json({
      status: "success",
      data: {
        expenses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        expense,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createExpense = async (req, res) => {
  try {
    const newExpense = await Expense.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        blog: newExpense,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Not include update and delete of Expense
