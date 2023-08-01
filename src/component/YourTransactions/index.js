import { Link } from "react-router-dom";
import Add from "../Add";
import "./index.css";

const YourTransactions = () => (
  <div className="transaction-background1">
    <div className="transaction-container1">
      <p className="trans-text">Transaction</p>

      <Add />
    </div>

    <div>
      <ul className="link">
        <div className="transaction-container2">
          <Link to="/alltransactions">
            <li className="all-transactions">All Transactions</li>
          </Link>
          <Link to="/debit">
            <li className="debit-transactions">Debit</li>
          </Link>
          <Link to="/credit">
            <li className="credit-transactions">Credit</li>
          </Link>
        </div>
      </ul>
    </div>
  </div>
);

export default YourTransactions;
