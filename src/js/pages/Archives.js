import React from "react";


import {Link} from "react-router";

export default class Archives extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={archivesStyle}>
        <h1>Welcome to Archives</h1>
        <p> No posts have been archived yet. This means everything is brand-spanking new! </p>
        <Link to="archives"><button class="btn btn-primary">archives</button></Link>
        <Link to="headlines"><button class="btn btn-primary">headlines</button></Link>
        <Link to="extras"><button class="btn btn-primary">extras</button></Link>
      </div>
    );
  }
}

var archivesStyle = {
  backgroundImage: "url('https://i.ytimg.com/vi/bC0hewvmAQQ/maxresdefault.jpg')",
  position: "absolute",
  WebkitBackgroundSize: "cover",
  height:"100%",
  width:"100%"
}