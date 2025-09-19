import React from "react";
import "../app.css";

const PrevOrds: React.FC = () => {
  // Hardcoded previous orders data
  const orders = [
    {
      date: "02/02/2024 12:09 AM",
      items: ["Mocha +L +Skim +No Sugar", "Egg Benedict"],
      total: 29.8,
    },
    {
      date: "10/01/2025 9:43 AM",
      items: ["Mocha +L +No Sugar"],
      total: 6.9,
    },
    {
      date: "07/10/2024 8:20 AM",
      items: ["Latte +M +Raw Sugar"],
      total: 5.7,
    },
  ];

  return (
    <div className="mt-4 container">

      {orders.map((order, idx) => (
        <div key={idx} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="text-muted">{order.date}</h5>

            <ul className="mb-2">
              {order.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold">Total: ${order.total.toFixed(2)}</span>
              <button className="btn btn-brand1">Order Again</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrevOrds;