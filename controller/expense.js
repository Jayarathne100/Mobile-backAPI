const Expense = require("../model/expense");

// Get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add expense
exports.addExpense = async (req, res) => {
  try {
    const { date, amount } = req.body;
    const newExpense = new Expense({ date, amount });
    await newExpense.save();
    res.json(newExpense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update expense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, amount } = req.body;

    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { date, amount },
      { new: true, runValidators: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json(updatedExpense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json({ message: "Expense deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
