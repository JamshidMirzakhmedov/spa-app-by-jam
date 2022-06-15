import React from "react";

function Footer() {
  return (
    <footer className=" bg-dark  d-flex flex-wrap justify-content-between align-items-center py-4  border-top">
      <div className="col-md-4 d-flex align-items-center  fs-6">
        <span className="text-muted text-light">
          © {new Date().getFullYear()} Company, Inc
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-light">
        <li className="fs-5 ms-3">
          <a href="#">
            <i className="bi bi-facebook "></i>
          </a>
        </li>
        <li className="fs-5 ms-3">
          <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li className="fs-5 ms-3">
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
