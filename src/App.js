import React from "react";
import PropTypes from "prop-types";
import { ReactComponent } from "./logo.svg";

class App extends React.Component{
  state = {
    count: 0
  };
  // 아래는 JS코드임을 알아 둘 것
  add = () =>{
    console.log("add");
    this.setState.count = 1;
  }
  minus = () =>{
    console.log("minus");
    this.setState.count = -1;
  }
  render(){
    return(
      <div>
        <h1>
        The number is {this.state.count}
        </h1>
        <button onClick = { this. add }>Add</button>
        <button onClick = { this. minus }>Minus</button>
      </div>
    );
  }
}

export default App; 
