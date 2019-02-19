import React from "react";
import TableRow from "../containers/table-row";

const Table = ({ books, page, step, isAdmin }) => {
  const bookArrayStart = (page - 1) * step;
  const bookArrayEnd = page * step - 1;

  const renderBlankRowIfAdmin = () => {
    if (isAdmin) {
      return (
        <TableRow
          book={{
            id: 0,
            codeid: "Aggiungi",
            title: "/",
            author_surname: "/",
            editor: "/",
            genre: "/",
            year: "/"
          }}
          isAdmin={isAdmin}
        />
      );
    }
  };

  const renderRow = book => {
    return <TableRow book={book} isAdmin={isAdmin} />;
  };

  return (
    <div>
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
          {renderBlankRowIfAdmin()}
          {books
            .slice(bookArrayStart, bookArrayEnd)
            .map(book => renderRow(book))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
