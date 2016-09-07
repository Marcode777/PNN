import React from "react";




import {Link} from "react-router";

export default class Headlines extends React.Component {

  render() {
    return (
      <div>
        <h1>Headline: Your Source For The Latest Uplifting News</h1>
        <p> Another great day!</p>
        <ul>
          <li><a href="http://www.theverge.com/2016/9/7/12758236/apple-iphone-7-announced-features-price-release-date">IPhone7 Comes Out today on Sept 7!</a></li>
          <li><a href="http://www.goodnewsnetwork.org/single-mom-disguises-dad-son-wont-feel-left/"> So her son, will not feel left out, single Mom disguises herself as a Dad</a></li>  
        </ul>
      </div>
    );
  }

}

