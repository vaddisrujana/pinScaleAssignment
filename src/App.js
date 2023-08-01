import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import AllTransactions from "./component/AllTransactions";
import Credit from "./component/Credit";
import Debit from "./component/Debit";
import Login from "./component/Login";

import Profile from "./component/Profile";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/alltransactions" component={AllTransactions} />
      <Route exact path="/credit" component={Credit} />
      <Route exact path="/debit" component={Debit} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default App;
