import React from "react";

const Table = props => {
  return (
    <div className="mt3">
      <table>
        <thead>
          <tr>
            <th>Codice</th>
            <th>Titolo</th>
            <th>Autore</th>
            <th>Anno</th>
            <th>Casa Editrice</th>
            <th>Genere</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map(book => (
            <tr key={book.id}>
              <td>{book.codeid}</td>
              <td>{book.title}</td>
              <td>{book.author_surname + " " + book.author_name}</td>
              <td>{book.year}</td>
              <td>{book.editor}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
