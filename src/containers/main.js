import React, { Component } from "react";
import Filter from "../components/filter";
import Table from "../components/table";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="ph4 pb4">
        <Filter />
        <Table />
      </div>
    );
  }
}

export default Main;
