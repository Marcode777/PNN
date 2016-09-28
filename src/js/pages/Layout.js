import React from "react";
import render from "react-dom";

import Headlines from "./Headlines";
import Archives from "./Archives";
import Extras from "./Extras";

import Nav from "../components/Nav";

import {Link} from "react-router";

//   var jsStyle = {
//   backgroundImage: 'url("https://s3.amazonaws.com/s3.imagefinder.co/uploads/2016/01/20143942/boss-fight-free-high-quality-stock-images-photos-photography-new-york-city-skyline-960x640.jpg")',
//   position:"absolute",
//   WebkitBackgroundSize: 'cover', // note the capital 'W' here
//   height:"100%",
//   width:"100%",
//   // WebkitTransition: 'all', // note the capital 'W' here
//   // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// };



export default class Layout extends React.Component {
  render() {
    const {location} = this.props;
    const containerStyle = {
      marginTop: "60px",

      backgroundImage: 'url("https://static.pexels.com/photos/9574/pexels-photo.jpeg")',
      position:"absolute",
      WebkitBackgroundSize: 'cover', // note the capital 'W' here
      height:"100%",
      width:"100%",
      color:"white",
    };


    return (
      <div>

        <Nav location = {location}/>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

              <div>
                <h1>PNN (Positive News Network): Your Source For Uplifting News (because mainstream is just too negative)</h1>
                {this.props.children}
                <p>Copyright &copy; PNN (demonstration by Marco Sebello)</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

// for React, contrary to popular belief, for simple styling, it is advisable to implement inline styles via style objects, and typical css-style dash syntax is actually camelCase in React