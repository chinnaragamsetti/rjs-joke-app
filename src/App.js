import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./LoginPage";
import Homepage from "./Homepage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/homepage" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
