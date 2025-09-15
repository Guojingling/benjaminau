import React from "react";
import "../app.css";
import { BsFillStarFill } from "react-icons/bs";

import pide from "./pide.webp";


const vouchers = [
 {
      number: "**** 5678",
      balance: 10,
      expiry: "2026/07/31",
    },
    {
      number: "**** 4321",
      balance: 50,
      expiry: "2025/12/25",
    },
  ];

const Rewards: React.FC = () => {

  return (
    <div className="container mt-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Loyalty Points Collection</h5>
            <button className="btn btn-brand4">Free Coffee</button>
          </div>

          <div className="d-flex mb-2">

            {[...Array(3)].map((_, idx) => (
              <BsFillStarFill key={`yellow-${idx}`} size={50} className="text-warning fs-4 me-2" />
            ))}
            {[...Array(6)].map((_, idx) => (
              <BsFillStarFill key={`grey-${idx}`} size={50} className="text-secondary fs-4 me-2" />
            ))}
            
          </div>

          <p className="text-muted mb-0">
            Order nine coffee from us and get one free.
          </p>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mt-5 mb-3">Vouchers</h5>
            <button className="btn btn-brand4">Add a Voucher</button>
          </div>
            {vouchers.map((voucher, idx) => (
                <div key={idx} className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="row mb-3">
                        <label className="col-4 form-label">Voucher Number</label>
                        <div className="col-8">
                          <div className="form-control">{voucher.number}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="row mb-3">
                        <label className="col-4 form-label">Left Balance ($)</label>
                        <div className="col-8">
                          <div className="form-control">{voucher.balance}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="row mb-3">
                        <label className="col-4 form-label">Expiry Date</label>
                        <div className="col-8">
                          <div className="form-control">{voucher.expiry}</div>
                        </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="row align-items-center mt-3">
              <h5>Member Campaign</h5>
              <div className="col-md-4 mb-3">
                <img
                  src={pide}
                  alt="Seasonal Special: Pide"
                  className="img-fluid rounded my-2" 
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      objectFit: "cover", 
                    }}
                />
                <p className="text-muted"> Seasonal Special: Autumn’s Secret is Here!</p>
              </div>
              <div className="col">
                <p>No other campaigns available at the moment. Stay tuned!</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
