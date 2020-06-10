/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            {/* <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt=""
            /> */}
            <span
              className="is-size-5 has-text-primary 
            has-text-weight-medium 
            is-family-monospace	
            is-uppercase
            "
            >
              Deligenius
            </span>
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/#"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item active">📄 Docs</a>

            <a className="navbar-item">📖 Tutorial</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button px-5">
                  <span className="icon">
                    <i className="fa fa-github fa-lg"></i>
                  </span>
                  <span className="">Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
