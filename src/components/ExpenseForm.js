import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <form className="form">
      <h2>Add Expense</h2>
      <input type="text" placeholder="Description" />
      <input type="number" placeholder="Amount" />
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
