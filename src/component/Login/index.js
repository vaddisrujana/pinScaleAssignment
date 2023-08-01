import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    userId: null,
  };

  onChangeUsername = (event) => this.setState({ email: event.target.value });
  onChangePassword = (event) => this.setState({ password: event.target.value });

  getUserID = () => {
    const { history } = this.props;
    const url = "https://bursting-gelding-24.hasura.app/api/rest/get-user-id";
    const headers = {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
    };

    const requestBody = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(url, requestBody, { headers })
      .then((response) => {
        const userId = response.data.get_user_id[0].id;
        this.setState({ userId });
        console.log(response);
        history.replace("/");
      })
      .catch((error) => {
        console.error("Error fetching user ID:", error);
      });
  };

  render() {
    const { userId, email, password } = this.state;

    return (
      <div className="login-background">
        <div>
          <h1 className="text">Please Login</h1>
          <br />
          <label htmlFor="email" className="label">
            EMAIL
          </label>
          <br />
          <input
            type="text"
            id="email"
            className="input"
            value={email}
            onChange={this.onChangeUsername}
          />
          <br />
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <br />
          <input
            type="password"
            id="password"
            className="input"
            value={password}
            onChange={this.onChangePassword}
          />
          <br />
          <div className="button-background">
            <button
              className="login-button"
              type="button"
              onClick={this.getUserID}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
