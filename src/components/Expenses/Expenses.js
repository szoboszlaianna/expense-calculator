import React, { useState } from 'react';
import Card from './Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const selectedYearHandler = year => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter onSelectYear={selectedYearHandler} selected={selectedYear} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
