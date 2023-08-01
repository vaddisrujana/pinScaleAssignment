import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import CreditDebitBarChart from "../CreditDebitBarChart";
import CreditDebitOverview from "../CreditDebitOverview";
import Add from "../Add";
import { credit, debit, debitIcon, creditIcon } from "../../assets";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

import "./index.css";

class Dashboard extends Component {
  state = {
    creditDebitTotals: null,
  };

  componentDidMount() {
    this.getLast7DaysCreditDebitTotals();
  }

  getLast7DaysCreditDebitTotals = () => {
    const url =
      "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days";
    const headers = {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      "x-hasura-role": "user",
      "x-hasura-user-id": "3",
    };

    axios
      .get(url, { headers })
      .then((response) => {
        const creditDebitTotals = response.data;
        this.setState({ creditDebitTotals });
        console.log(response.data.last_7_days_transactions_credit_debit_totals);
      })
      .catch((error) => {
        console.error("Error fetching credit debit totals:", error);
      });
  };
  render() {
    const { creditDebitTotals } = this.state;

    return (
      <div className="dashboard-background">
        <Sidebar />
        <div className="background2">
          <div className="frame-background">
            <h1 className="accounts">Accounts</h1>
            <Add />
          </div>
          <div className="background22">
            <div className="credit-debit-background">
              <div className="credit-background">
                <p>Credit</p>
                <img src={credit} alt="credit-icon" />
              </div>
              <div className="debit-background">
                <p>Debit</p>
                <img src={debit} alt="debit-icon" />
              </div>
            </div>
            <div>
              <p className="last-transaction">Last Transaction</p>
              <div className="recent-transactions">
                <div>
                  {creditDebitTotals ? (
                    <div>
                      <ul>
                        {creditDebitTotals.last_7_days_transactions_credit_debit_totals.map(
                          (each) => (
                            <CreditDebitOverview creditDebitDetails={each} />
                          )
                        )}
                      </ul>
                    </div>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p className="debit-credit-overview">Debit & Credit Overview</p>
              <CreditDebitBarChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
