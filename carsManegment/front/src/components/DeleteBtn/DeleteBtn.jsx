import React, { Component } from "react";
import Axios from "axios";

class DeleteCar extends Component {
  constructor(props) {
    super(props);

    this.state = { license: this.props.license };
  }

  delete = e => {
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

    this.Updatelist();
  };

  Updatelist = () => {
    this.props.UpdateCarList(this.state.license);
  };

  render() {
    return (
      <button type="button" onClick={this.delete} class="btn btn-danger">
        Delete
      </button>
    );
  }
}

export default DeleteCar;
