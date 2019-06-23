import React, { Component } from "react";
import "./form.css";
import clientModel from "../../DAL/ClientModel";
import Axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: "",
      password: ""
    };
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    let LoginFormData = {
      Id: this.state.Id,
      password: this.state.password
      //authToken: cookies.get('auth').token
    };

    clientModel.Login(LoginFormData).then(result => {
      console.log(result);
      if (result === true) {
        // eslint-disable-next-line no-restricted-globals
        window.location.replace("/lines");
      }
    });
  };

  render() {
    return (
      <div className="form-style">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group ">
            <label htmlFor="inputfirstname4">ID:</label>
            <input
              type="text"
              className="form-control"
              name="Id"
              maxLength="9"
              id="inputId"
              onChange={event => this.handleInputChange(event)}
              placeholder="Enter your Id"
            />
          </div>

          <div className="form-group ">
            <label htmlFor="inputlastname4">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="inputpassword"
              onChange={event => this.handleInputChange(event)}
              placeholder="Enter your password"
            />
          </div>

          <br />
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>

        <button type="button" onClick={this.getMe} className="btn btn-primary">
          get me
        </button>
      </div>
    );
  }
}

export default Login;
