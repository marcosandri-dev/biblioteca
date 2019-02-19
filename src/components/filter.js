import React from "react";

const Filter = props => {
  return (
    <div>
      <h1 className="mt-3">Catalogo libri</h1>
      <hr />
      <div className="row align-items-end">
        <div className="col-3">
          <div className="form-group">
            <label htmlFor="type" className="label">
              Ricerca per:
            </label>
            <select
              className="form-control"
              name="type"
              onChange={props.changeSelectInput}
            >
              <option value="title">Titolo</option>
              <option value="author_surname">Autore (cognome)</option>
              <option value="genre">Genere</option>
              <option value="editor">Casa Editrice</option>
            </select>
          </div>
        </div>
        <div className="col-9">
          <div className="form-group">
            <input
              name="searchKey"
              className="form-control"
              type="text"
              onChange={props.changeFilterInput}
              placeholder="ex: anarchia"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
