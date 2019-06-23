import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carslist">
                  {" "}
                  Car List{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addcar">
                  Add Car
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carinfo">
                  Car Info
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/deletecar">
                  Delete Car
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
