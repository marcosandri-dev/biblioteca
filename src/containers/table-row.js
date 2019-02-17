import React, { Component } from "react";
import BookForm from "../components/book-form";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = { toggledContent: false };
  }

  renderIDCode = codeid => {
    if (this.props.isAdmin)
      return (
        <td className="link dim blue underline" onClick={this.toogleContent}>
          {codeid}
        </td>
      );
    else return <td>{codeid}</td>;
  };

  toogleContent = () => {
    this.setState(prevState => ({
      toggledContent: !prevState.toggledContent
    }));
  };

  render() {
    const { book } = this.props;
    return !this.state.toggledContent ? (
      <tr key={book.id}>
        {this.renderIDCode(book.codeid)}

        <td>{book.title}</td>
        <td>
          {book.author_surname + " "}
          {book.author_name ? book.author_name : ""}
        </td>
        <td>{book.editor}</td>
        <td>{book.genre}</td>
        <td>{book.year}</td>
      </tr>
    ) : (
      <tr>
        <BookForm book={book} toggleContent={this.toogleContent} />
      </tr>
    );
  }
}

export default TableRow;
