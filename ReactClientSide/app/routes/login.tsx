import type { Route } from "./+types/home";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import '../app.css';

import sandwich from "../register/sandwich.jpg";
import NavbarGlass from "../component/navbar-glasstop";
import Footer from "../component/footer";
import HelpRedirect from "../component/help-redirect";
import Register from "../register/signup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const checkSubmit = (e: React.FormEvent) => {
  e.preventDefault();

    if (email == "jane.smith@domain.com" && password == "Password123") {
      setError("");
      navigate("../register/userprofile");
    } else {
      setError("Invalid email or password");
    }
   };
  return (
        <>
      <NavbarGlass />

      <div className="container my-5">
        <div className="row align-items-stretch">

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1
              className="mb-4"
              style={{
                fontFamily: 'Monotype Corsiva',
                fontSize: '4rem',

                //compare with normal font below:
                //fontSize: "64px",
                //fontStyle: "normal",
                //fontWeight: 700,
                //lineHeight: "normal",
                //letterSpacing: "-1.28px",
              }}
            >
              Login
            </h1>

            <form onSubmit={checkSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label htmlFor="remember" className="form-check-label">
                    Remember Me
                  </label>
                </div>
                <a href="#" className="text-decoration-none">
                  Forget Password?
                </a>
              </div>

              {error && <p className="text-danger">{error}</p>}

              <button type="submit" className="btn btn-brand1 w-100 mb-3">
                Sign In
              </button>

              <hr />
              <div className="row align-items-center">
                <div className="col">
                  <h5>New to Us?</h5>
                </div>
                <div className="col-4">
                  <Link to="/Register" className="btn btn-brand1 w-100">
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>

          <div className="col-6 d-flex d-none d-md-block">
           <img
             src={sandwich}
             alt="Sandwich"
             className="img-fluid rounded"
             style={{maxHeight:'700px'}}
           />
          </div>
        </div>

        <HelpRedirect />
        <Footer />
      
      </div>
    </>
  );
}      