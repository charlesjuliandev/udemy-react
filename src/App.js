import React, { Component } from "react";
import "./styles.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    userInput: "test345"
  };

  userInputChangeHangler = event => {
    this.setState({
      userInput: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <UserInput
          changed={this.userInputChangeHangler}
          currentName={this.state.userInput}
        />
        <UserOutput userInput={this.state.userInput} />
        <UserOutput userInput="test123" />
        <UserOutput userInput={this.state.userInput} />
      </div>
    );
  }
}

export default App;
