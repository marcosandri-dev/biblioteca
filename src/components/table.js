import React from "react";

const Table = props => {
  return (
    <div className="mt3">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>userID</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.userId}</td>
              <td>{book.title}</td>
              <td>{book.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
