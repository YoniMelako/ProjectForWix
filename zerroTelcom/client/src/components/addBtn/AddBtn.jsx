import React, { Component } from "react";

import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

class AddBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lineToAdd: this.props.line
    };
  }

  addLine = lineId => {
    if (cookies.get("auth") === undefined) {
      window.location("/login");
    } else {
      let data = {
        userToken: cookies.get("auth").token,
        lineToAdd: this.state.lineToAdd._id
      };
      axios.post("http://127.0.0.1:5000/users/addline", data).then(result => {
        console.log(result);
        if (result.data.success) {
          window.location("/userLines");
        }
      });
    }
  };

  render() {
    return (
      <button type="button" onClick={this.addLine} class="btn btn-primary">
        Add Line
      </button>
    );
  }
}

export default AddBtn;
