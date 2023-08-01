import React, { Component } from "react";
import axios from "axios";

import Sidebar from "../Sidebar";
import YourTransactions from "../YourTransactions";
import CreditTransactionDetails from "../CreditTransactionDetails";
import "./index.css";
class Credit extends Component {
  state = {
    creditTransactionList: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const apiUrl =
        "https://bursting-gelding-24.hasura.app/api/rest/all-transactions";
      const headers = {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": "3",
      };
      const requestBody = {
        limit: 2,
        offset: 2,
      };

      const response = await axios.get(apiUrl, {
        headers,
        params: requestBody,
      });
      console.log("Response:", response.data.transactions);
      this.setState({ creditTransactionList: response.data.transactions });
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }
  render() {
    const { creditTransactionList } = this.state;
    return (
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
            <div>
              <ul>
                {creditTransactionList.map((each) => (
                  <CreditTransactionDetails debitDetails={each} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Credit;
