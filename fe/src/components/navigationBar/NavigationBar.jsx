import React from "react";
import useSession from "../../hooks/useSession";
import AddBookModal from "../addBookModal/addBookModal";
import { useState } from "react";

const NavigationBar = () => {
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const session = useSession();
  const toggleAddBookModal = () => setIsAddBookModalOpen(!isAddBookModalOpen);
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <div className="row w-100">
            <div className="col-3">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                  src="https://i0.wp.com/scuolainsoffitta.com/wp-content/uploads/2017/02/come-organizzare-una-libreria.jpg?w=700&ssl=1"
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
                {session && (
                  <li className="nav-item">
                    <button
                      onClick={toggleAddBookModal}
                      className="btn btn-primary"
                    >
                      Aggiungi Libro
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isAddBookModalOpen && (
        <AddBookModal
          show={isAddBookModalOpen}
          setShow={setIsAddBookModalOpen}
          close={toggleAddBookModal}
        />
      )}
    </>
  );
};

export default NavigationBar;
