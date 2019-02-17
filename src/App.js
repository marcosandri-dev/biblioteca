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
    this.state = { route: "main", isAdmin: true };
  }

  changeRoute = page => {
    this.setState({ route: page });
  };

  renderRoute = route => {
    switch (route) {
      case "main":
        return <Main isAdmin={this.state.isAdmin} />;
      case "about":
        return <About />;
      case "contacts":
        return <Contacts />;
      case "blog":
        return <h2>Insert a Blog link!</h2>;
      default:
        return <Main />;
    }
  };

  changeView = () => {
    this.setState(prevState => ({
      isAdmin: !prevState.isAdmin
    }));
  };

  render() {
    return (
      <div className="helvetica Site">
        <Header
          changeView={this.changeView}
          isAdmin={this.state.isAdmin}
          changeRoute={this.changeRoute}
        />
        <div className="Site-content">{this.renderRoute(this.state.route)}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
