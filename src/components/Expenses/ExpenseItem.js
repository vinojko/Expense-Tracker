import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //Prvo neki kar se navezuje, potem pa set...., to kar posodobi spremenljivko

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
