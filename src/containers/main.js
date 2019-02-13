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
      selectedFilter: "title",
      selectedPage: 1,
      listedBooksNumber: 25
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate() {
    this.checkPageConsistency();
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

  changePage = page => {
    this.setState({ selectedPage: page });
  };

  checkPageConsistency = () => {
    const totalPages =
      Math.floor(
        this.state.filteredBooks.length / this.state.listedBooksNumber
      ) + 1;
    if (this.state.selectedPage > totalPages) {
      this.changePage(totalPages);
    }
  };

  onChange = e => {
    this.filterBooks(e.target.value);
  };

  render() {
    const { filteredBooks, selectedPage, listedBooksNumber } = this.state;
    return (
      <div className="ph4 pb4">
        <Filter
          changeFilterInput={this.onChange}
          changeSelectInput={this.onSelectChange}
        />
        <Table
          books={filteredBooks}
          page={selectedPage}
          step={listedBooksNumber}
        />
        <Pagination
          page={selectedPage}
          totalPages={Math.floor(filteredBooks.length / listedBooksNumber)}
          changePage={this.changePage}
        />
      </div>
    );
  }
}

export default Main;
