import "../../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../common/Card";

const ExpenseItem = ({ title, date, amount }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">£{amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
