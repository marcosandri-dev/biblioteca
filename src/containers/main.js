import React, { Component } from "react";
import Filter from "../components/filter";
import Table from "../components/table";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      filteredBooks: [],
      filterInput: ""
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

  filterBooks = title => {
    const filteredBooks = this.state.books.filter(book => {
      if (book.title.includes(title)) {
        return book;
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
        <Filter changeFilterInput={this.onChange} />
        <Table books={this.state.filteredBooks} />
      </div>
    );
  }
}

export default Main;
