import React, { Component } from "react";
import Axios from "axios";

class CarInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      license: "",
      car: "",
      msg: ""
    };
  }

  handleChanges = e => {
    this.setState({ license: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let data = {
      license: this.state.license
    };

    Axios.post("http://127.0.0.1:8000/cars/getcar", data).then(result => {
      console.log(result);
      if (result.data.error) {
        this.setState({ msg: result.data.msg });
      } else if (result.data.result.success) {
        this.setState({ car: result.data.car, msg: "" });
      }
    });
  };

  render() {
    let info = "";
    if (this.state.msg !== "") {
      info = <div style={{ color: "red" }}>{this.state.msg}</div>;
    }
    if (this.state.car !== "") {
      let car = this.state.car;
      info = (
        <div class="list-group">
          <button
            type="button"
            class="list-group-item list-group-item-action active"
          >
            Car Info
          </button>

          <button type="button" class="list-group-item list-group-item-action">
            <label style={{ color: "green" }}>License :</label> {car.license}
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            <label style={{ color: "green" }}>Color :</label> {car.color}
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            <label style={{ color: "green" }}>Model Month :</label>{" "}
            {car.modelMonth}
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            <label style={{ color: "green" }}>Model Year :</label>{" "}
            {car.modelYear}
          </button>
        </div>
      );
    }

    return (
      <div>
        <h3 style={{ color: "green" }}> Car Info Page</h3>

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

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>

        <div />
        {info}
      </div>
    );
  }
}

export default CarInfo;
