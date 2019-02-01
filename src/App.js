import React, { Component } from "react";
import Main from "./containers/main";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <h1> APP </h1>
        <Header />
        <Main />
        {
          //ROUTER Main / about / contacts
        }
        <Footer />
      </div>
    );
  }
}

export default App;
