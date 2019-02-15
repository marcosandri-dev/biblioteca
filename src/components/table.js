import React from "react";

const Table = ({ books, page, step, isAdmin, openAddBookForm }) => {
  const bookArrayStart = (page - 1) * step;
  const bookArrayEnd = page * step - 1;

  return (
    <div className="mt3">
      <table>
        <thead>
          <tr>
            <th>Codice</th>
            <th>Titolo</th>
            <th>Autore</th>
            <th>Casa Editrice</th>
            <th>Genere</th>
            <th>Anno</th>
          </tr>
        </thead>
        <tbody>
          {isAdmin ? (
            <tr>
              <td className="link dim blue underline" onClick={openAddBookForm}>
                {" "}
                Aggiungi{" "}
              </td>
              <td> / </td>
              <td> / </td>
              <td> / </td>
              <td> / </td>
              <td> / </td>
            </tr>
          ) : (
            ""
          )}
          {books.slice(bookArrayStart, bookArrayEnd).map(book => (
            <tr key={book.id}>
              <td>{book.codeid}</td>
              <td>{book.title}</td>
              <td>
                {book.author_surname} {book.author_name ? book.author_name : ""}
              </td>
              <td>{book.editor}</td>
              <td>{book.genre}</td>
              <td>{book.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
