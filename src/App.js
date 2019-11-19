import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import AdListContainer from "./components/AdListContainer";
import DetailedAdContainer from "./components/DetailedAdContainer";
import SignupFormContainer from "./components/SignupFormContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={AdListContainer} />
          <Route path="/ads/:id" component={DetailedAdContainer} />
          <Route path="/signup" component={SignupFormContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
