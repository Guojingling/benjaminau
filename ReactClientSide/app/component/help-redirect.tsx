import '../app.css';
import React from "react";
import { Link } from "react-router";
const HelpRedirect: React.FC = () => {
  return (
    <div className="card bg-light my-5 shadow-sm">
      <div className="card-body">
        <h5 className="col mb-4">Looking for help?</h5>

        <p className="col mb-3">
          If you have business questions, please send us a message:
        </p>
        <div className="col mb-4">
          <Link
            to="/#contact"
            className="fw-bold text-decoration-none brand-link"
          >
            Contact Us
          </Link>
        </div>

        <p className="col mb-3">
          This webapp is built and supported by Aladdin Digital. If you have
          technical questions or your business requires similar solutions:
        </p>
        <div className="col">
          <a
            href="https://www.aladdindigital.com.au/contactus.html"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-bold text-decoration-none brand-link"
          >
            Technology Questions
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpRedirect;