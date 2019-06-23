import React, { Component } from "react";
import Axios from "axios";

class DeleteCar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleChanges = e => {
    this.setState({ license: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let data = {
      license: this.state.license
    };

    Axios.post("http://127.0.0.1:8000/cars/deletecar", data).then(result => {
      console.log(result);
      if (result.data.error) {
        this.setState({ msg: result.data.msg });
      } else if (result.data.result.success) {
        this.setState({ msg: result.data.msg });
      }
    });
  };

  render() {
    let info = "";
    if (this.state.msg !== "") {
      info = <div style={{ color: "blue" }}>{this.state.msg}</div>;
    }

    return (
      <div>
        <h3 style={{ color: "green" }}>Delete Car Page</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Car license</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              maxLength="7"
              aria-describedby="CarinfoHelp"
              placeholder="Enter car license"
              onChange={this.handleChanges}
              value={this.state.license}
            />
            <small id="CarinfoHelp" className="form-text text-muted">
              Enter the car license
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <div />
        {info}
      </div>
    );
  }
}

export default DeleteCar;
