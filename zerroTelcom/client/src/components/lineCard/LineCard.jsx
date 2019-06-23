import React, { Component } from "react";
import AddBtn from "../addBtn/AddBtn";
import "./lineCard.css";

class LineCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      line: this.props.line
    };
  }

  render() {
    console.log(this.state.line);

    return (
      <div class="col-sm-4">
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-yellow-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036826"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{this.state.line.name}</h5>

            <p class="card-text">
              Call Minutes : {this.state.line.call_minutes}
            </p>
            <p class="card-text">
              Internet Giga : {this.state.line.internet_giga}
            </p>
            <p class="card-text">
              Overseas Calls : {this.state.line.overseas_calls}
            </p>
            <h3>{this.state.line.price}</h3>
            <AddBtn line={this.state.line} />
          </div>
        </div>
      </div>
    );
  }
}

export default LineCard;
