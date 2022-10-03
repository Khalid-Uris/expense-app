import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // console.log(event.target.value);
    //console.log("Title Changed!");

    // setUserInput({
    //   ...userInput,title: event.target.value,
    // });

    // setUserInput((prevState)=>{
    //   return {...prevState,title: event.target.value};
    // })
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);

    // setUserInput({
    //   ...userInput,date: event.target.value,
    // });
  };

  const amountChangeDate = (event) => {
    setDate(event.target.value);
    // console.log(event.target.value);
    // setUserInput({
    //   title: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" value={title} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type={"number"}
              min="0.01"
              step={"0.01"}
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type={"date"}
              min="2019-01-01"
              max={"2022-12-31"}
              value={date}
              onChange={amountChangeDate}
            />
          </div>

          <div className="new-expense__actions">
            <button type={"button"} onClick={props.onCancel}>
              Cancel
            </button>
            <button type={"submit"}>Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
