import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../app.css";   
const AccDetails: React.FC = () => {

  const [editingField, setEditingField] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showCvv, setShowCvv] = useState(false);

  return (
  // First Name, Last Name, Email, Password, Payment Details (Card, Expiry, CVV)
    <form className="mt-4 container">
      <div className="row align-items-center">
        <div className="col">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-8 col-md-6">
          <input
            type="text"
            className="form-control"
            id="firstName"
            defaultValue="Jane"
            disabled={editingField !== "firstName"}
          />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-brand1"
            onClick={() =>
              setEditingField(editingField === "firstName" ? null : "firstName")
            }
          >
            {editingField === "firstName" ? "Save" : "Edit"}
          </button>
          {editingField === "firstName" && (
            <button
              type="button"
              className="btn btn-brand4 ms-2"
              onClick={() => setEditingField(null)}
            >
            Cancel
          </button>
          )}
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-8 col-md-6">
          <input
            type="text"
            className="form-control"
            id="lastName"
            defaultValue="Smith"
            disabled={editingField !== "lastName"}
          />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-brand1"
            onClick={() =>
              setEditingField(editingField === "lastName" ? null : "lastName")
            }
          >
            {editingField === "lastName" ? "Save" : "Edit"}
          </button>
          {editingField === "lastName" && (
            <button
              type="button"
              className="btn btn-brand4 ms-2"
              onClick={() => setEditingField(null)}
            >
            Cancel
          </button>
          )}
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-8 col-md-6">
          <input
            type="email"
            className="form-control"
            id="email"
            defaultValue="jane.smith@domain.com"
            disabled={editingField !== "email"}
          />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-brand1"
            onClick={() =>
              setEditingField(editingField === "email" ? null : "email")
            }
          >
            {editingField === "email" ? "Save" : "Edit"}
          </button>
          {editingField === "email" && (
            <button
              type="button"
              className="btn btn-brand4 ms-2"
              onClick={() => setEditingField(null)}
            >
            Cancel
          </button>
          )}
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col">
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-8 col-md-6">
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              defaultValue="Password123"
              disabled={editingField !== "password"}
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
        <div className="col">
          <button
            type="button"
            className="btn btn-brand1"
            onClick={() =>
              setEditingField(editingField === "password" ? null : "password")
            }
          >
            {editingField === "password" ? "Save" : "Edit"}
          </button>
          {editingField === "password" && (
            <button
              type="button"
              className="btn btn-brand4 ms-2"
              onClick={() => setEditingField(null)}
            >
            Cancel
          </button>
          )}
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <label htmlFor="paymentDetails" className="form-label">
            Payment Details
          </label>
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-2">
          <label htmlFor="cardDetails" className="form-label">
            Card
          </label>
        </div>
        <div className="col-6 col-lg-4">
          <input
            type="text"
            className="form-control"
            id="cardDetails"
            defaultValue="1234-5678-9012-3456"
            disabled={editingField !== "cardDetails"}
          />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-brand1"
            onClick={() =>
              setEditingField(editingField === "cardDetails" ? null : "cardDetails")
            }
          >
            {editingField === "cardDetails" ? "Save" : "Edit"}
          </button>
          {editingField === "cardDetails" && (
            <button
              type="button"
              className="btn btn-brand4 ms-2"
              onClick={() => setEditingField(null)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-2">
          <label htmlFor="cardDetails" className="form-label">
            Card Expiry
          </label>
        </div>
        <div className="col-6 col-lg-4">
          <input
            type="text"
            className="form-control"
            id="cardExpiry"
            defaultValue="12/25"
            disabled={editingField !== "cardExpiry"}
          />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-brand1"
            onClick={() =>
              setEditingField(editingField === "cardExpiry" ? null : "cardExpiry")
            }
          >
            {editingField === "cardExpiry" ? "Save" : "Edit"}
          </button>
          {editingField === "cardExpiry" && (
            <button
              type="button"
              className="btn btn-brand4 ms-2"
              onClick={() => setEditingField(null)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-2">
          <label htmlFor="cardDetails" className="form-label">
            CVV
          </label>
        </div>
        <div className="col-6 col-lg-4">
          <div className="input-group">
            <input
              type={showCvv ? "text" : "password"}
              className="form-control"
              id="cvv"
              defaultValue="123"
              disabled={editingField !== "cvv"}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowCvv(!showCvv)}
            >
              {showCvv ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-brand1"
            onClick={() =>
              setEditingField(editingField === "cvv" ? null : "cvv")
            }
          >
            {editingField === "cvv" ? "Save" : "Edit"}
          </button>
          {editingField === "cvv" && (
            <button
              type="button"
              className="btn btn-brand4 ms-2"
              onClick={() => setEditingField(null)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default AccDetails;
