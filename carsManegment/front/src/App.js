import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddCar from "./components/AddCar/AddCar";
import CarInfo from "./components/CarInfo/CarInfo";
import CarList from "./components/CarList/CarList";
import DeleteCar from "./components/DeleteCar/DeleteCar";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Route>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/carslist" component={CarList} />
              <Route path="/carinfo" component={CarInfo} />
              <Route path="/addcar" component={AddCar} />
              <Route path="/deletecar" component={DeleteCar} />
            </Switch>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
