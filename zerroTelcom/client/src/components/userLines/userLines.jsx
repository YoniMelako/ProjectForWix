import React, { Component } from "react";
import LineModel from "../../DAL/LiensModel";
import LineCard from "../lineCard/LineCard";

class Lines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: []
    };
  }

  componentDidMount() {
    console.log("mount");
  }

  render() {
    console.log(this.state.lines);
    let x = this.state.lines.map(line => {
      return <LineCard line={line} />;
    });
    return (
      <div className="lines-body">
        <h1>this liens page</h1>
        <div class="container">
          <div class="row">{x}</div>
        </div>
      </div>
    );
  }
}

export default Lines;
