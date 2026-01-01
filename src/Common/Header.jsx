import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="uk-navbar-container uk-letter-spacing-small">
        <div className="uk-container">
          <div className="uk-position-z-index" data-uk-navbar>
            <div className="uk-navbar-left">
              <Link className="uk-navbar-item uk-logo" to="/">
                Kocina
              </Link>
              <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
                <li className="uk-active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/recipes">Recipes</Link>
                </li>
                <li>
                  <Link to="/search">Search</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
