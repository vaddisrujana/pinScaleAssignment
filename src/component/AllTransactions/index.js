import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import YourTransactions from "../YourTransactions";

import "./index.css";

class AllTransactions extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const url =
        "https://bursting-gelding-24.hasura.app/api/rest/all-transactions";
      const headers = {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": "1",
      };

      const response = await axios.get(url, { headers });
      this.setState({ transactions: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    return (
      <div className="Alltransactions-background">
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
  }
}

export default AllTransactions;
