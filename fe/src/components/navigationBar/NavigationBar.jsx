import React from "react";

const NavigationBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <div className="row w-100">
          <div className="col-3">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://picsum.photos/340/340"
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-top rounded-circle me-3"
              />
            </a>
          </div>
          <div className="col-9 d-flex justify-content-end align-items-center">
            <ul className="d-flex justify-content-end align-items-center list-unstyled gap-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contattaci
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
