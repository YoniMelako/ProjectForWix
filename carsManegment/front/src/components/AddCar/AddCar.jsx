import React, { Component } from "react";
import Axios from "axios";

class AddCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      license: "",
      color: "",
      modelYear: "",
      modelMonth: "",
      msg: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let data = {
      license: this.state.license,
      color: this.state.color,
      modelYear: this.state.modelYear,
      modelMonth: this.state.modelMonth
    };

    Axios.post("http://127.0.0.1:8000/cars/addcar", data).then(result => {
      console.log(result);
      if (result.data.error) {
        this.setState({ msg: "that was problem to add the car" });
      } else if (result.data.result.success) {
        this.setState({ msg: "car added success" });
      }
    });
  };

  render() {
    let info = "";
    if (this.state.msg !== "car added success") {
      info = <div style={{ color: "red" }}>{this.state.msg}</div>;
    } else {
      info = <div style={{ color: "green" }}>{this.state.msg}</div>;
    }

    return (
      <div>
        <h3 style={{ color: "green" }}> Add Car Page</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Car license</label>
            <input
              type="text"
              className="form-control"
              name="license"
              id="exampleFormControlInput1"
              onChange={this.handleChanges}
              placeholder="enter license"
              maxLength="7"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Car Color</label>
            <input
              type="text"
              className="form-control"
              name="color"
              id="exampleFormControlInput1"
              onChange={this.handleChanges}
              placeholder="enter car color"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Model Month select</label>
            <select
              className="form-control"
              name="modelMonth"
              onChange={this.handleChanges}
              id="exampleFormControlSelect1"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Model Year</label>
            <input
              type="number"
              className="form-control"
              name="modelYear"
              onChange={this.handleChanges}
              id="exampleFormControlInput1"
              placeholder="enter Model Year"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {info}
      </div>
    );
  }
}

export default AddCar;
