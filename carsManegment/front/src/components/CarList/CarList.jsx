import React, { Component } from "react";
import Axios from "axios";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import "./CarList.css";

class CarList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    Axios.get("http://127.0.0.1:8000/cars/getallcars").then(result => {
      console.log(result);
      if (result.data.error) {
        console.log(result.data.error);
      } else if (result.data.result.success) {
        this.setState({ cars: result.data.cars });
      }
    });
  }

  UapdateListInstate = license => {
    console.log("hii");
    console.log(license);

    let updatedList = this.state.cars.filter(car => {
      return car.license !== license;
    });
    console.log(updatedList);

    this.setState({ cars: updatedList });
  };

  render() {
    let carlist = "";
    if (this.state.cars.length > 0) {
      carlist = this.state.cars.map(car => {
        return (
          <li class="list-group-item">
            <label>License : </label>
            {car.license}
            <label> color : </label>
            {car.color}
            <label> Model Year : </label>
            {car.modelYear}
            <label> Model Month : </label>
            {car.modelMonth}{" "}
            <DeleteBtn
              license={car.license}
              UpdateCarList={this.UapdateListInstate}
            />
          </li>
        );
      });
    }

    console.log(this.state.cars);

    return (
      <div>
        <h3 style={{ color: "green" }}> Car List Page</h3>
        <ul>{carlist}</ul>
      </div>
    );
  }
}

export default CarList;
