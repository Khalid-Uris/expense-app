import React from "react";
// import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 9, 9);
  //let title = props.title;

  // const [title, setTitle] = useState(props.title);
  //console.log("How Many time execute");

  // const titleChangeHandle = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {props.title}
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={titleChangeHandle}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
