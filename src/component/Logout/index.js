import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import { logout, popupLogout } from "../../assets";
import { GrClose } from "react-icons/gr";

import "./index.css";

const Logout = () => (
  <div>
    <Popup
      modal
      trigger={
        <button type="button" className="logout-button">
          <img src={logout} className="logout" alt="logout" />
        </button>
      }
    >
      {(close) => (
        <>
          <div>
            <div className="logout2">
              <button className="logout1">
                <img
                  src={popupLogout}
                  className="popup-logout"
                  alt="popup-logout"
                />
              </button>
              <div>
                <p className="para1">Are you sure you want to Logout?</p>
                <p className="para2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                </p>
              </div>
              <button className="button" onClick={() => close()}>
                <GrClose />
              </button>
            </div>
            <div className="logout3">
              <button className="yes">Yes, Logout</button>
              <button className="cancel" onClick={() => close()}>
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </Popup>
  </div>
);
export default Logout;
