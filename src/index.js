import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import { makeMainRoutes } from "./routes";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

const routes = makeMainRoutes();

export const UserContext = React.createContext();

class App extends Component {
  updateValue = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  resetState = () => {
    this.setState({ ...this.INITIAL_STATE });
  };

  // CRB: Ensure that when you add methods, that you place them above the INITAL_STATE

  INITIAL_STATE = {
    name: "",
    accessToken: false,
    updateValue: this.updateValue,
    resetState: this.resetState
  };

  // CRB: I would assign state to resetState, but I don't know if you can setState before state has been intialized YMMV.

  state = { ...this.INITIAL_STATE };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <BrowserRouter>{routes}</BrowserRouter>
      </UserContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
