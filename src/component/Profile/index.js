import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Add from "../Add";
import { profilepic } from "../../assets";
import "./index.css";

class Profile extends Component {
  state = {
    profileDetails: null,
  };

  componentDidMount() {
    this.getProfile();
  }

  getProfile = () => {
    const url = "https://bursting-gelding-24.hasura.app/api/rest/profile";
    const headers = {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      "x-hasura-role": "user",
      "x-hasura-user-id": "1",
    };

    axios
      .get(url, { headers })
      .then((response) => {
        const profileDetails = response.data.users[0];
        this.setState({ profileDetails });
      })
      .catch((error) => {
        console.error("Error fetching credit debit totals:", error);
      });
  };
  render() {
    const { profileDetails } = this.state;
    console.log(profileDetails);

    return (
      <div className="profile-background">
        <Sidebar />
        <div className="profile-background1">
          <div className="frame-background">
            <h1 className="accounts">Profile</h1>
            <Add />
          </div>
          <div className="profile-container">
            <div>
              <img src={profilepic} alt="image1" className="profilepic" />
            </div>
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <br />
              <input type="text" id="name" className="input" />
              <br />
              <label htmlFor="email" className="label">
                Email
              </label>
              <br />
              <input type="email" id="email" className="input" />
              <br />
              <label className="label" htmlFor="date">
                Date of Birth
              </label>
              <br />
              <input type="date" id="date" className="input" />
              <br />
              <label className="label" htmlFor="permanentAddress">
                Permanent Address
              </label>
              <br />
              <input type="text" id="permanentAddress" className="input" />
              <br />
              <label className="label" htmlFor="postalCode">
                Postal Code
              </label>
              <br />
              <input type="numbers" id="postalCode" className="input" />
            </div>
            <div>
              <label className="label" htmlFor="username">
                User Name
              </label>
              <br />
              <input type="text" id="username" className="input" />
              <br />
              <label className="label" htmlFor="password">
                Password
              </label>
              <br />
              <input type="password" id="password" className="input" />
              <br />
              <label className="label" htmlFor="presentAddress">
                Present Address
              </label>
              <br />
              <input type="text" id="presentAddress" className="input" />
              <br />
              <label className="label" htmlFor="city">
                City
              </label>
              <br />
              <input type="text" id="city" className="input" />
              <br />
              <label className="label" htmlFor="country">
                Country
              </label>
              <br />
              <input type="text" id="country" className="input" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
