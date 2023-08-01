import Delete from "../Delete";
import Edit from "../Edit";
import { downArrow, upArrow } from "../../assets";
import "./index.css";
const DebitTransactionDetails = (props) => {
  const { debitDetails } = props;
  console.log(debitDetails.type);
  const { transaction_name, category, date, amount, type } = debitDetails;
  const arrow = type === "credit" ? upArrow : downArrow;

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
  if (type === "debit") {
    return (
      <li className="list">
        <div className="container">
          <div className="flex">
            <img src={arrow} alt="arrow" />
            <p className="para">{transaction_name}</p>
          </div>

          <p>{category}</p>
          <p>{formattedDate}</p>
          <p>{amount}</p>
          <Edit />
          <Delete />
        </div>
      </li>
    );
  }
};

export default DebitTransactionDetails;
