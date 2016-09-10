import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from"./components/Footer";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Link from "react-router";

import Layout from "./pages/Layout";

import Headlines from "./pages/Headlines";
import Archives from "./pages/Archives";
import Extras from "./pages/Extras";


const app = document.getElementById("app");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Headlines}></IndexRoute>
      <Route path="archives" component={Archives}></Route>
      <Route path="headlines" component={Headlines}></Route>
      <Route path="extras" component={Extras}></Route>
    </Route>
  </Router>,
  app);


//we import "react"
//we import "react-dom" which is a rendering engine. React is great in that you don't have to render to HTML, you can render to a whole bunch of stuff. You can render it to a string, you can render to the DOM which is our active webpage which is what we're using here. And the actual rendering engine is separate from the React syntax, which is a very cool concept. That makes the code you write extremely versatile, even towards native apps and things like that.
// So the first thing we're going to do is create a Layout component (or layout class), we're extending the React component.
// The core of React is that everything is a component. If you're looking at an index.html, everything is an element in html, e.g., it's a body element, it's a div element, and that's kind of the same concept behind React components, everything is a component, instead of an element. 
// So in this case, we have a Layout component, and at the very basic, we need a render method for a component. So the render method is like "hey, what are we spitting out?"
// And here's the JSX part of it, which will freak you out at first, it is anything wrapped in parentheses, can convert HTML to JavaScript created elements. So in JavaScript you can do "document.createElement("div")" Now we just made a div, then we can go "div.innerHTML='some content'", so this is basically going to transpile down to stuff like that. But that's a real pain to type, so JSX allows you to type something that's much more familiar, you can get great syntax highlighting on it, if you install a JSX plug-in to whatever text-editor you're using, Atom or Sublime, and it'll transpile it down. So at first it feels very awkward, because you're kind of thinking "Aren't I blending HTML with JavaScript?", then you finally realize, no, JavaScript creates HTML elements all the time, this is just an easy way to do it, day-in day-out, it makes it easy for the developer. And then if you ever want to render a component, you use it as if it were an HTML tag, as in "ReactDOM.render(<Layout/>, app)"; So just like this, I'm telling now, here's my component for my whole Layout, i'm going to go get the "app" element, which is the div with the id of app "<div id='app'></div>", and I'm going to render my "Layout" into "app", as in "ReactDOM.render(<Layout/>, app);" and that's my React App.
// *** be aware that since, this is JSX, some syntax which you think you have normally commented out in JS, will still show up because you're typing in JSX.***