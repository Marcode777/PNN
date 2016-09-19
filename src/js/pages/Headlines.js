import React from "react";
import Newsline from "../components/Newsline";





import {Link} from "react-router";

var linkStyle = {
  color: "maroon"
}

export default class Headlines extends React.Component {

  render() {
    return (
      <div>
      <h1>Headlines</h1>
      <h3>POSITIVE NEWS!</h3>
        <div>
          <div class="col-md-4">
              <ul>
                <li><a href="http://www.theverge.com/2016/9/7/12758236/apple-iphone-7-announced-features-price-release-date"><strong style={linkStyle}>IPhone7 Comes Out today on Sept 7!</strong></a></li>
              </ul>
          </div>
          <div class="col-md-4">
              <ul>
                <li><a href="http://www.goodnewsnetwork.org/single-mom-disguises-dad-son-wont-feel-left/"><strong style={linkStyle}>So her son, will not feel left out, single Mom disguises herself as a Dad for school event</strong></a></li>
              </ul>
          </div>
          <div class="col-md-4">
              <ul>
                <li><a href="http://abcnews.go.com/Lifestyle/viral-rescue-dog-diggy-scores-legal-victory-stay/story?id=42144363&cid=clicksource_4380645_4_heads_posts_vert_hed"><strong style={linkStyle}>Rescue Dog that went viral on internet gets forever home! </strong></a></li>
              </ul>
          </div>
          <div class="col-md-4">
              <ul>
                <li><a href="http://abc7ny.com/health/teen-uses-gift-to-overcome-battle-against-leukemia/1514330/"><strong style={linkStyle}>Teen uses power of music to battle leukemia </strong></a></li>
              </ul>
          </div>
       


        </div>
      </div>
    );
  }

}





