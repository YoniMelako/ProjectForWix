import React from "react";
import "./App.css";

import Main from "./components/navbar/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/RegisterForm/Register";
import Homeview from "./components/Home/HomeView";
import Lines from "./components/lines/lines";
import userLines from "./components//userLines/userLines";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Main />

          <Route>
            <Switch>
              <Route path="/" exact component={Homeview} />
              <Route path="/login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/lines" component={Lines} />
              <Route path="/mypackeges" component={Lines} />
              <Route path="/userLines" component={userLines} />
            </Switch>
          </Route>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
