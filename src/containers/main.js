import React, { Component } from "react";
import Filter from "../components/filter";
import Table from "../components/table";
import Pagination from "../components/pagination";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      filteredBooks: [],
      filterInput: "",
      selectedFilter: "title"
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    fetch("http://localhost:8000/api/books")
      .then(response => response.json())
      .then(json => this.setState({ books: json, filteredBooks: json }));
  };

  onSelectChange = e => {
    this.setState({ selectedFilter: e.target.value });
  };

  filterBooks = searchString => {
    const filteredBooks = this.state.books.filter(book => {
      if (book[this.state.selectedFilter]) {
        if (
          book[this.state.selectedFilter]
            .toUpperCase()
            .includes(searchString.toUpperCase())
        ) {
          return book;
        }
      }
    });

    this.setState({ filteredBooks: filteredBooks });
  };

  onChange = e => {
    this.filterBooks(e.target.value);
  };

  render() {
    return (
      <div className="ph4 pb4">
        <Filter
          changeFilterInput={this.onChange}
          changeSelectInput={this.onSelectChange}
        />
        <Table books={this.state.filteredBooks} />
        <Pagination />
      </div>
    );
  }
}

export default Main;
