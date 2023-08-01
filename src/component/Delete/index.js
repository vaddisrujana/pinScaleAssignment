import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import { delete1, popupLogout } from "../../assets";
import { GrClose } from "react-icons/gr";
import { BiError } from "react-icons/bi";

import "./index.css";

const Delete = () => (
  <div>
    <Popup
      modal
      trigger={
        <button type="button" className="logout-button">
          <img src={delete1} alt="logout" />
        </button>
      }
    >
      {(close) => (
        <>
          <div>
            <div className="logout2">
              <button className="logout1">
                <BiError />
              </button>
              <div>
                <p className="para1">Are you sure you want to Delete?</p>
                <p className="para2">
                  This transaction will be deleted immediately. You can’t undo
                  this action.
                </p>
              </div>
              <button className="button" onClick={() => close()}>
                <GrClose />
              </button>
            </div>
            <div className="logout3">
              <button className="yes">Yes, Delete</button>
              <button className="cancel" onClick={() => close()}>
                No, Leave it
              </button>
            </div>
          </div>
        </>
      )}
    </Popup>
  </div>
);
export default Delete;
