import React from "react";

const Filter = props => {
  return (
    <div>
      <h1>Catalogo libri</h1>
      <hr />
      <label htmlFor="type" className="f5 b db mb2 mt3">
        Ricerca per:
      </label>
      <select name="type" className="input-reset ba b--black-20 pa2 w-30">
        <option>Titolo</option>
        <option>Autore</option>
        <option>Genere</option>
        <option>Anno</option>
      </select>
      <input
        name="searchKey"
        className="input-reset ba b--black-20 pa2 w-60 fr"
        type="text"
        onChange={props.changeFilterInput}
      />
    </div>
  );
};

export default Filter;
