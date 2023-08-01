import { Link } from "react-router-dom";
import "./index.css";
import {
  moneymatterslogo,
  profile,
  transaction,
  home,
  user,
} from "../../assets";
import Logout from "../Logout";

const Sidebar = () => (
  <div className="background1">
    <div>
      <div className="money-matters">
        <img
          src={moneymatterslogo}
          alt="moneymatterslogo"
          className="money-matters-logo"
        />
        <p className="money-title">
          Money<span className="matters-title"> Matters</span>
        </p>
      </div>
      <div className="background12">
        <Link to="/">
          <div className="home">
            <img src={home} alt="home" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/alltransactions">
          <div className="transaction">
            <img src={transaction} alt="home" />
            <p className="transaction-title">Transactions</p>
          </div>
        </Link>
        <Link to="/profile">
          <div className="profile">
            <img src={profile} alt="home" />
            <p>Profile</p>
          </div>
        </Link>
      </div>
    </div>
    <div className="user-details">
      <img src={user} className="user" alt="user" />
      <div>
        <p className="name">Rhye</p>
        <p className="email">olivia@untitledui.com</p>
      </div>
      <Logout />
    </div>
  </div>
);

export default Sidebar;
