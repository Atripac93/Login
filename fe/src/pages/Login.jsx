import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import SignupForm from "../components/signupForm/SignupForm";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  // const [showSignupForm, setShowSignupForm] = useState(false);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("http://localhost:3084/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (resp.ok) {
        console.log("Login success");
        let data = await resp.json();
        localStorage.setItem("auth", JSON.stringify(data.token));
        navigate("/home");
        return data;
      } else {
        throw new Error("Login failed");
      }
    } catch (e) {
      console.error("Error during login:");
      setError("Credenziali non valide. Riprova.");
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card my-5">
            <form
              onSubmit={onSubmit}
              className="card-body cardbody-color p-lg-5"
            >
              <div className="text-center">
                <img
                  src="https://picsum.photos/340/340"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  onChange={onChangeInput}
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Inserisci la tua email..."
                />
              </div>

              <div className="mb-3">
                <input
                  onChange={onChangeInput}
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Inserisci la tua password"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 mb-5 w-100"
                >
                  Login
                </button>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Non sei registrato?{" "}
                <a href="#" className="text-dark fw-bold ms-1">
                  Registrati ora!
                </a>
                {/* <div className="card my-5">
                  <SignupForm />
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
