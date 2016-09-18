import React from "react";




import {Link} from "react-router";

export default class Headlines extends React.Component {

  render() {
    return (
      <div>
        <h1>Headline: Your Source For The Latest Uplifting News</h1>
        <p> Another great day!</p>
        <div class="col-md-6">
        <h3>POSITIVE NEWS!</h3>
            <ul>
              <li><a href="http://www.theverge.com/2016/9/7/12758236/apple-iphone-7-announced-features-price-release-date">IPhone7 Comes Out today on Sept 7!</a></li>
              <li><a href="http://www.goodnewsnetwork.org/single-mom-disguises-dad-son-wont-feel-left/"> So her son, will not feel left out, single Mom disguises herself as a Dad</a></li>  
              <li><a href="http://abcnews.go.com/Lifestyle/viral-rescue-dog-diggy-scores-legal-victory-stay/story?id=42144363&cid=clicksource_4380645_4_heads_posts_vert_hed"> Rescue Dog that went viral on internet gets forever home! </a></li>  
            </ul>
        </div>
        <div class="col-md-6">
          <h3>And In Regular News...</h3>
          <ul>
            <li><a href="">some link here</a></li>
            <li><a href="">some link here</a></li>
            <li><a href="">some link here</a></li>
          </ul>
        </div>
      </div>
    );
  }

}

