import Delete from "../Delete";
import Edit from "../Edit";
import { credit, debit, debitIcon, creditIcon } from "../../assets";
import "./index.css";

const CreditDebitOverview = (props) => {
  const { creditDebitDetails } = props;
  const { date, sum, type } = creditDebitDetails;
  const icon = type === "credit" ? creditIcon : debitIcon;
  const className = type === "credit" ? "credit" : "debit";
  const amount = type === "credit" ? sum : `-${sum}`;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, "0");
    const amOrPm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;

    return `${day} ${month}, ${formattedHour}.${minute} ${amOrPm}`;
  };

  const originalDate = date;
  const formattedDate = formatDate(originalDate);
  return (
    <li className="list">
      <div className="flex-transaction">
        <img src={icon} />
        <p>{formattedDate}</p>
        <p className={className}>{amount}</p>
        <Edit />
        <Delete />
      </div>
    </li>
  );
};

export default CreditDebitOverview;
