import React, { Component } from "react";
import Conditional from "./Conditional.jsx";
class NewApp extends Component {
  state = { loggedIn: true };

  HandleClick(isLoggedIn) {
    console.log("here...........", isLoggedIn);
    const text = isLoggedIn ? "Logged In" : "LoggedOut";
    console.log(text);
  }
  render() {
    return (
      <div>
        <Conditional
          isLoggedIn={this.state.loggedIn}
          click={this.HandleClick}
        />
      </div>
    );
  }
}

export default NewApp;
