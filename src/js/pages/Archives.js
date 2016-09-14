import React from "react";


import {Link} from "react-router";

export default class Archives extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome to Archives</h1>
        <p> No posts have been archived yet. This means everything is brand-spanking new! </p>
      </div>
    );
  }
}