import React, { Component } from "react";
import Main from "./containers/main";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Contacts from "./components/contacts";

class App extends Component {
  constructor() {
    super();
    this.state = { route: "main" };
  }

  changeRoute = page => {
    this.setState({ route: page });
  };

  renderRoute = route => {
    switch (route) {
      case "main":
        return <Main />;
      case "about":
        return <About />;
      case "contacts":
        return <Contacts />;
      default:
        return <Main />;
    }
  };

  render() {
    return (
      <div className="helvetica Site">
        <Header changeRoute={this.changeRoute} />
        <div className="Site-content">{this.renderRoute(this.state.route)}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
