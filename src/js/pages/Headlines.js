import React from "react";
import Newsline from "../components/Newsline";





import {Link} from "react-router";

var linkStyle = {
  color: "maroon"
}

var textAlign = {
  textAlign:"center",
}

export default class Headlines extends React.Component {

  render() {
    return (
      <div>
      <h1 style= {textAlign}>Headlines</h1>
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
          <div class="col-md-4">
              <ul>
                <li><a href="http://www.businessinsider.com/trump-clinton-one-nice-thing-debate-2016-10"><strong style={linkStyle}>Trump and Hillary Say One Nice Thing To Each Other </strong></a></li>
              </ul>
          </div>
           <div class="col-md-4">
              <ul>
                <li><a href="https://www.bloomberg.com/view/articles/2016-10-21/the-philippines-just-blew-up-obama-s-asia-pivot"><strong style={linkStyle}>Phillippines Changes Asia Pivot </strong></a></li>
              </ul>
          </div>
            <div class="col-md-4">
              <ul>
                <li><a href="http://www.bbc.com/news/world-asia-37700409"><strong style={linkStyle}>Phillippines President Duterte Successful Visit In China For Trade and Peace </strong></a></li>
              </ul>
          </div>
            </div>
            <div class="col-md-4">
              <ul>
                <li><a href="http://www.foxnews.com/politics/2016/11/08/first-polls-close-in-2016-race-trump-projected-to-win-ind-ky-clinton-wins-vt.html"><strong style={linkStyle}>Trump Wins United State Presidential Election</strong></a></li>
              </ul>
          </div>


        </div>
    );
  }

}





