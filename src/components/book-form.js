import React from "react";

const BookForm = ({ book, toggleContent }) => {
  const renderInput = width => (
    <div className={"fl " + width}>
      <input className="input-reset ba b--black-20 pv2 pl2 w-90" />
    </div>
  );

  return (
    <td colSpan="100%" className="center">
      <div className="cf">
        {renderInput("w-10")}
        {renderInput("w-20")}
        {renderInput("w-20")}
        {renderInput("w-40")}
        {renderInput("w-10")}
      </div>
      <div className="cf">
        {renderInput("w-70")}
        {renderInput("w-30")}
      </div>
      <div>
        <span className="fr" onClick={toggleContent}>
          TOGGLE
        </span>
        <button className="fr">MODIFICA</button>
      </div>
    </td>
  );
};

export default BookForm;
