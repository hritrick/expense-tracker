# Expense Tracker (React)

A straightforward React expense tracker demonstrating form management with `useState`, dynamic list rendering, deletion, total calculation, and side effects via `useEffect`.

## What this Project Does
- Manages expense input fields (`name` and `amount`) with `useState`.
- Allows adding new expenses to the list and deleting existing expenses.
- Calculates and renders the running total expense amount.
- Executes a `useEffect` hook whenever the `expenses` list state changes (logging the new total and item count to the browser console).

---

## Step-by-Step Commands (From Scratch)

### 1. Create project from an empty folder
```bash
npm create vite@latest expense-tracker -- --template react
cd expense-tracker
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

The app will run on: **`http://localhost:5173`**. Open browser developer tools (Console tab) to observe the `useEffect` log output upon adding or deleting expenses.

---

## Required Ports & Services
- **Port:** `5173` (Vite dev server)
- **Database:** None (client-side React state)

---

## File-by-File Implementation Notes

| File | Purpose & Requirements Covered |
| :--- | :--- |
| `src/App.jsx` | - **Form inputs with `useState`**: `const [name, setName] = useState('')`, `const [amount, setAmount] = useState('')`<br>- **Expenses state**: `const [expenses, setExpenses] = useState([...])`<br>- **Add Expense**: `handleAddExpense` creates new item and appends it to state array<br>- **Delete Expense**: `handleDeleteExpense` filters out selected item by `id`<br>- **Total calculation**: `expenses.reduce((sum, item) => sum + item.amount, 0)`<br>- **`useEffect` side effect**: `useEffect(() => { console.log(...); }, [expenses])` fires when `expenses` change |
| `src/index.css` | Simple, clean styling for form inputs, expense list items, delete buttons, and the summary total box |
| `src/main.jsx` | Mounts the root component |
| `vite.config.js` | Vite configuration with `@vitejs/plugin-react` |
| `package.json` | Project configuration and scripts |
