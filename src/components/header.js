import React from "react";

const Header = props => {
  return (
    <header className="bg-black-90 w-100">
      <nav className="f6 fw6 ttu tracked tr">
        <span className="white">
          Admin:{" "}
          <input
            className="dib ma3"
            type="checkbox"
            onChange={() => props.changeView()}
            value=""
          />
        </span>

        <span
          className="link dim white dib pa3 bl"
          onClick={() => props.changeRoute("main")}
          title="Home"
        >
          Catalogo
        </span>
        <span
          className="link dim white dib pa3 bl"
          onClick={() => props.changeRoute("about")}
          title="About"
        >
          Chi siamo
        </span>
        <span
          className="link dim white dib pa3 bl"
          onClick={() => props.changeRoute("blog")}
          title="Store"
        >
          Blog
        </span>
        <span
          className="link dim white dib pa3 bl"
          onClick={() => props.changeRoute("contacts")}
          title="Contact"
        >
          Contatti
        </span>
      </nav>
    </header>
  );
};

export default Header;
