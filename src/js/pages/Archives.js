import React from "react";
import Newsline from "../components/Newsline";
import Headlines from "./Headlines";


import {Link} from "react-router";

var textAlign = {
  textAlign:"center",
}

export default class Archives extends React.Component {
  render() {
   const {query} = this.props.location;
   const {params} = this.props;
   const {newsline} = params;
   const {date, filter} = query;
    return (
      <div>
        <h1 style= {textAlign}>Archives</h1>
        <p> No posts have been archived yet. This means everything is brand-spanking new! </p>
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