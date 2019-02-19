import React from "react";

const Header = props => {
  return (
    <nav
      className="navbar navbar-expand bg-dark text-light justify-content-between p-0 px-1 pl-2"
      role="navigation"
    >
      <a className="navbar-brand">
        {"Admin: "}
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => props.changeView()}
          value=""
        />
      </a>

      <ul className="navbar-nav ">
        <li onClick={() => props.changeRoute("main")} className="nav-item">
          <a className="nav-link p-0" title="Home">
            Home
          </a>
        </li>
        <li className="nav-item" onClick={() => props.changeRoute("about")}>
          <a className="nav-link p-0" title="About">
            Chi siamo
          </a>
        </li>
        <li className="nav-item" onClick={() => props.changeRoute("blog")}>
          <a className="nav-link p-0" title="Blog">
            Blog
          </a>
        </li>
        <li className="nav-item" onClick={() => props.changeRoute("contacts")}>
          <a className="nav-link p-0" title="Contact">
            Contatti
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
