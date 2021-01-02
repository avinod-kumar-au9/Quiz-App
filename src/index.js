import React from "react";
import ReactDOM from "react-dom";
// import Routing from "./temp/compo/routing";
// import { Provider } from "react-redux";
// import store from "./temp/store/store";
import "./index.css";
import Apps from "./temp1/mainquiz"


class App extends React.Component {
  clickhandler = () => {
    document.querySelector("body").classList.toggle("change");
    document.querySelector("button").classList.toggle("buttchange");
    let val = document.querySelector("body").className;
    
    if (val == "change")
    document.querySelector("button").innerHTML="whiteMode"
    else{
      document.querySelector("button").innerHTML="DarkMode"
    }
  };

  

  render() {
    return (
      <React.Fragment>
        <button className="darkbutt" onClick={this.clickhandler}>
        DarkMode
        </button>

        <Apps/>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
