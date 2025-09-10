import Footer from "~/component/footer";
import NavbarGlass from "../component/navbar-glasstop";
import { Link } from "react-router";
import { useState } from "react";

export default function UserProfile() {
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
          <button className="btn btn-brand3 w-100 d-flex flex-column justify-content-center align-items-center"
            onClick={() => handleClick("previousOrder")}>
            <h5>Previous Order</h5>
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-brand3 w-100 d-flex flex-column justify-content-center align-items-center"
            onClick={() => handleClick("rewards")}>
            <h5>Rewards</h5>
          </button>
        </div>
      </div>
      {selected === "profile" && <div>Jane's personal profile info here</div>}
      {selected === "previousOrder" && <div>Previous Order info</div>}
      {selected === "rewards" && <div>Rewards info</div>}
      <Footer />
    </div>
    </>
  );
}