import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isOpening, setIsOpening] = useState(false);

  const addExpenseHandler = () => {
    setIsOpening(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenses = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenses);
  };

  return (
    <div className='new-expense'>
      {!isOpening && <button onClick={addExpenseHandler}>Add Expense</button>}
      {isOpening && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
