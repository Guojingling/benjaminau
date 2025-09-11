import Footer from "~/component/footer";
import NavbarGlass from "../component/navbar-glasstop";
import HelpRedirect from "../component/help-redirect";

import '../app.css';

import AccDetails from "./accdetails";
import PrevOrds from "./prevords";

import { Link } from "react-router";
import { useState } from "react";

export default function UserAcc() {
    const [selected, setSelected] = useState<string | null>(null);

    const handleClick = (section: string) => {
      setSelected(section);
    };

  return (
    <>
      <NavbarGlass />
      <div className="container mt-5">

      <div className="row align-items-center my-5">
        <div className="col">
          <h1>
            Hi Jane!
          </h1>
        </div>
        <div className="col text-end">
          <Link to="/cafemenu" className="btn btn-brand1">
            Order Now
          </Link>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <button className={`btn btn-brand3 w-100 d-flex flex-column justify-content-center align-items-center ${selected === "profile" ? "active" : ""}`}
            onClick={() => handleClick("profile")}>
            <h5>Profile</h5>
          </button>
        </div>
        <div className="col-md-4">
          <button className={`btn btn-brand3 w-100 d-flex flex-column justify-content-center align-items-center ${selected === "previousOrder" ? "active" : ""}`}
            onClick={() => handleClick("previousOrder")}>
            <h5>Previous Order</h5>
          </button>
        </div>
        <div className="col-md-4">
          <button className={`btn btn-brand3 w-100 d-flex flex-column justify-content-center align-items-center ${selected === "rewards" ? "active" : ""}`}
            onClick={() => handleClick("rewards")}>
            <h5>Rewards</h5>
          </button>
        </div>
      </div>
      {selected === "profile" && <div><AccDetails /></div>}
      {selected === "previousOrder" && <div><PrevOrds /></div>}
      {selected === "rewards" && <div>Rewards info</div>}

      <HelpRedirect />
      <Footer />
    </div>
    </>
  );
}