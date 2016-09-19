import React from "react";


import {Link} from "react-router";

export default class Extras extends React.Component {

  render() {
    return (
      <div style={extrasStyle}>
        <h1>Welcome to Extras</h1>
        <p> Check here extra random things that can uplift you </p>
      </div>
    );
  }
}

var extrasStyle = {
  backgroundImage: "url('https://s-media-cache-ak0.pinimg.com/564x/b4/c2/d7/b4c2d7c9fb28e69bff7ec8a1e37b8b42.jpg')",
  position: "absolute",
  WebkitBackgroundSize: "cover",
  height:"100%",
  width:"100%"
}