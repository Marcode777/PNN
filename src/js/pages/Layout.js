import React from "react";
import render from "react-dom";

import Headlines from "./Headlines";
import Archives from "./Archives";



import {Link} from "react-router";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Your Source For Uplifting News (because mainstream is just too negative)</h1>
        {this.props.children}
        <Link to="archives"><button class="btn btn-primary">archives</button></Link>
        <Link to="headlines"><button class="btn btn-primary">headlines</button></Link>
        <Link to="extras"><button class="btn btn-primary">extras</button></Link>
      </div>
    );
  }
}