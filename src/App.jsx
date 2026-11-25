import { useState, useEffect } from 'react';

function App() {
  // 1. State for form inputs (expense name and amount)
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  // 2. State for expenses list
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Notebooks', amount: 15.5 },
    { id: 2, name: 'Stationery', amount: 8.0 },
  ]);

  // Calculate total amount from expenses list
  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);

  // 3. useEffect that triggers whenever the expenses list changes
  useEffect(() => {
    console.log(
      `[useEffect] Expenses list updated! Total items: ${expenses.length}, Total amount: $${totalAmount.toFixed(2)}`
    );
  }, [expenses]); // Dependency array monitors `expenses`

  // 4. Add expense handler
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!name.trim() || !amount || Number(amount) <= 0) return;

    const newExpense = {
      id: Date.now(),
      name: name.trim(),
      amount: parseFloat(amount),
    };

    setExpenses((prev) => [...prev, newExpense]);
    setName('');
    setAmount('');
  };

  // 5. Delete expense handler
  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>

      {/* Expense Input Form */}
      <form onSubmit={handleAddExpense} className="expense-form">
        <div className="form-group">
          <label htmlFor="expense-name">Expense Name</label>
          <input
            id="expense-name"
            type="text"
            placeholder="e.g. Textbook"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expense-amount">Amount ($)</label>
          <input
            id="expense-amount"
            type="number"
            step="0.01"
            min="0.01"
            placeholder="e.g. 45.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Expense</button>
      </form>

      {/* Total Amount Display */}
      <div className="total-box">
        <span>Total Expenses:</span>
        <strong>${totalAmount.toFixed(2)}</strong>
      </div>

      {/* Expenses List */}
      <h3>Expenses List</h3>
      {expenses.length === 0 ? (
        <p className="empty-message">No expenses added yet.</p>
      ) : (
        <ul className="expense-list">
          {expenses.map((item) => (
            <li key={item.id} className="expense-item">
              <span className="item-name">{item.name}</span>
              <span className="item-amount">${item.amount.toFixed(2)}</span>
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteExpense(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
