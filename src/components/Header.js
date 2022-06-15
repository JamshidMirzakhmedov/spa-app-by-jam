import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-light bg-dark ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-light me-5">
          Menu SPA
        </Link>
        <div className="navbar-nav me-auto my-2 my-lg-0 d-flex flex-row ms-5 ">
          <li className="nav-item me-3">
            <Link to="/" className="nav-a text-light">
              Home
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/about" className="nav-a text-light">
              About
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/contacts" className="nav-a text-light">
              Contacts
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Header;
