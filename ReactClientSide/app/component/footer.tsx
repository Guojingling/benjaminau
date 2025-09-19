import '../app.css';
import React from "react";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <>
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
            <Link to="#" className="footer-link mx-3">Menu</Link>
            <Link to="/#hours" className="footer-link mx-3">Opening Hours</Link>
            <Link to="/#contact" className="footer-link mx-3">Contact Us</Link>
            <Link to="/#contact" className="footer-link mx-3">Comments</Link>
          </div>
        </div>
       </div>
      </footer>
    </>
  );
};

export default Footer;