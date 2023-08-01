import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import { GrClose } from "react-icons/gr";

import "./index.css";

const Add = () => (
  <div className="add-background">
    <Popup
      modal
      trigger={
        <button type="button" className="transactions-button">
          + Add Transaction
        </button>
      }
    >
      {(close) => (
        <>
          <div className="form">
            <div>
              <div className="flex">
                <div>
                  <p className="para1">Add Transaction</p>
                  <p className="para2">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
                <button className="button" onClick={() => close()}>
                  <GrClose />
                </button>
              </div>
            </div>
            <form>
              <label htmlFor="transactionName" className="label1">
                Transaction Name
              </label>
              <br />
              <input type="text" id="transactionName" className="input1" />
              <br />
              <label htmlFor="type1" className="label1">
                Transaction Name
              </label>
              <br />
              <select className="input1">
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
              <br />
              <label htmlFor="type1" className="label1">
                Category
              </label>
              <br />
              <select className="input1">
                <option value="entertainment">Entertainment</option>
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
              </select>
              <br />
              <label htmlFor="amount1" className="label1">
                Amount
              </label>
              <br />
              <input type="Number" id="amount1" className="input1" />
              <br />
              <label htmlFor="date1" className="label1">
                Date
              </label>
              <br />
              <input type="date" id="date1" className="input1" />
              <br />
              <button className="button2" type="button">
                Add Transaction{" "}
              </button>
            </form>
          </div>
        </>
      )}
    </Popup>
  </div>
);
export default Add;
