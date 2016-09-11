import React from "react";
import render from "react-dom";

import Headlines from "./Headlines";
import Archives from "./Archives";



import {Link} from "react-router";

  var jsStyle = {
  backgroundImage: 'url("https://s3.amazonaws.com/s3.imagefinder.co/uploads/2016/01/20143942/boss-fight-free-high-quality-stock-images-photos-photography-new-york-city-skyline-960x640.jpg")',
  position:"absolute",
  WebkitBackgroundSize: 'cover', // note the capital 'W' here
  height:"100%",
  width:"100%",
  // WebkitTransition: 'all', // note the capital 'W' here
  // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

export default class Layout extends React.Component {
  render() {
    return (
      <div style={jsStyle}>
        <h1>Your Source For Uplifting News (because mainstream is just too negative)</h1>
        {this.props.children}
        <Link to="archives"><button class="btn btn-primary">archives</button></Link>
        <Link to="headlines"><button class="btn btn-primary">headlines</button></Link>
        <Link to="extras"><button class="btn btn-primary">extras</button></Link>
      </div>
    );
  }
}