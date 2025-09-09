import type { Route } from "./+types/home";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import '../app.css';

import sandwich from "../register/sandwich.jpg";
import glasstop from "../register/glasstop.webp";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const checkSubmit = (e: React.FormEvent) => {
  e.preventDefault();

    if (email === "jane.smith@domain.com" && password === "Password123") {
      setError("");
// Redirect to profile later
    } else {
      setError("Invalid email or password");
    }
   };
  return (
        <>

      <nav className="navbar navbar-expand-lg"
        style={{ height: '130px', backgroundImage: `url(${glasstop})`, backgroundSize: 'cover', backgroundPosition: '58.5% 58.5%' }}>
        <div className="container">
          <a href="/" className="btn btn-brand2 ms-auto">
            Homepage
          </a>
        </div>
      </nav>

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
              <div className="d-flex justify-content-between align-items-center">
                <h5>New to Us?</h5>
                <a href="/signup" className="btn btn-brand1">
                  Sign Up
                </a>
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
      

      <hr className="footer-separator" />
      <footer className="footer py-3"> 
       <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-between">
           <div>
             <p className="mb-2">
               Artisan Cafe Canberra
             </p>
           </div>
           <div className="mt-auto">
              <p className="mb-0" style={{ fontFamily: 'Monotype Corsiva', fontSize: '1 rem' }}>
               © 2025 Artisan Cafe Canberra. All rights reserved.
              </p>
           </div>
         </div>
          <div className="col-md-6 d-flex flex-column align-items-end justify-content-center">
            <a href="#" className="footer-link mx-3">Menu</a>
            <a href="#hours" className="footer-link mx-3">Opening Hours</a>
            <a href="#contact" className="footer-link mx-3">Contact Us</a>
            <a href="#comment" className="footer-link mx-3">Comments</a>
          </div>
        </div>
       </div>
      </footer>
      </div>
    </>
  );
}      