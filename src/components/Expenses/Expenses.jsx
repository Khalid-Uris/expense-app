import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterDropDown, setFilterDropDown] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilterDropDown(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterDropDown;
  });
  // let expensesContent = <p>No expenses found.</p>;

  // if (filteredExpense.length > 0) {
  //   expensesContent = filteredExpense.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedDefaultYear={filterDropDown}
          onChangeFilter={filterChangeHandler}
        />

        {/* {expensesContent} */}
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
