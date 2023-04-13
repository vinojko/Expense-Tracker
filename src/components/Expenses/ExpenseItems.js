import "./ExpenseItems.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseItems = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filteredArray = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const expenseFilterHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilterChange={expenseFilterHandler}
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList items={filteredArray} />
      </Card>
    </div>
  );
};

export default ExpenseItems;
