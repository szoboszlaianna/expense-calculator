import React, { useState } from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const selectedYearHandler = year => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onSelectYear={selectedYearHandler} selected={selectedYear} />
        {props.expenses.map(expense => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))}{' '}
      </Card>
    </div>
  );
};

export default Expenses;
