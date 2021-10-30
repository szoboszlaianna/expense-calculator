import React, { useState } from 'react';

import Card from './Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
  };
  return (
    <Card className='expense-item'>
      <div className='expense-date'>
        <div className='expense-month'>{month}</div>
        <div className='expense-year'>{year}</div>
        <div className='expense-day'>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
