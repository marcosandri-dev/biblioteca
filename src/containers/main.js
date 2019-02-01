import React, { Component } from "react";
import Filter from "../components/filter";
import Table from "../components/table";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>MAIN</h1>
        <Filter />
        <Table />
      </div>
    );
  }
}

export default Main;
