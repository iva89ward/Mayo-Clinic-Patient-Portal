import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  return (
    <div className="list">
      <h2>Expense List</h2>
      <ul>
        <li>Consultation - $200</li>
        <li>Lab Test - $150</li>
      </ul>
    </div>
  );
}

export default ExpenseList;
