import Footer from "~/component/footer";
import HelpRedirect from "~/component/help-redirect";
import NavbarGlass from "~/component/navbar-glasstop";

import { FaEye, FaEyeSlash, FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import '../app.css';
import { Link } from "react-router";


export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div>
      <NavbarGlass />

      <div className="container my-5">
        <div className = "row">
          <h1
              className="mb-4"
              style={{
                fontFamily: 'Monotype Corsiva',
                fontSize: '4rem',
              }}
            >
              Create your account
            </h1>
        </div>
        <div className="row align-items-stretch">

          <div className="col-md-6 d-flex flex-column justify-content-center border-end">

            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Jane"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Smith"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="jane.smith@domain.com"
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
                    placeholder="**********"
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
              
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  required
                />
                <label htmlFor="terms" className="form-check-label">
                  By creating an account, I agree to the <a href="#" className="text-decoration-none">Terms and Conditions</a>
                </label>
              </div>
              <div className ="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="newsletter"
                />
                <label htmlFor="newsletter" className="form-check-label">
                  Receive newsletter about our products, events, and the latest promotions.
                </label>
              </div>
              <button type="submit" className="btn btn-brand1 w-100 mb-3">
                Sign Up
              </button>
            </form>
          </div>

          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <p className="text-center mb-3">OR</p>
            <div className="d-grid gap-3 mb-4">
             <button className="btn btn-brand3" style={{ borderRadius: "50rem" }}> <FaGoogle /> Continue with Google</button>
             <button className="btn btn-brand3" style={{ borderRadius: "50rem" }}> <FaApple /> Continue with Apple</button>
             <button className="btn btn-brand3" style={{ borderRadius: "50rem" }}> <FaFacebook /> Continue with Facebook</button>
            </div>
            <p className="text-center mb-3">Already a member?</p>
            <Link to="/login" className="btn btn-brand1 w-100"> Sign In</Link>
          </div>
        </div>

        <HelpRedirect />
        <Footer />
      </div>
    </div>
  );
}