import "./index.css";
import Sidebar from "../Sidebar";
import YourTransactions from "../YourTransactions";
const Debit = () => (
  <div className="debit-background">
    <Sidebar />

    <div className="Alltransactions-background1">
      <YourTransactions />
      <div className="transaction-background2">
        <div className="container">
          <p className="transaction-name">Transaction Name</p>
          <p className="category">Category</p>
          <p className="date">Date</p>
          <p className="amount">Amount</p>
        </div>
      </div>
    </div>
  </div>
);

export default Debit;
