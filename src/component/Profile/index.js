import "./index.css";
import Sidebar from "../Sidebar";
import Add from "../Add";
import { profilepic } from "../../assets";

const Profile = () => (
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
          <label className="label" htmlFor="permanentAddress">
            Permanent Address
          </label>
          <br />
          <input type="text" id="permanentAddress" className="input" />
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

export default Profile;
