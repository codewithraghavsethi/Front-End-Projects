import React from "react";

const Navbar = ({setCategory}) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">News Daily</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{cursor:"pointer"}}>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("business")}>Business</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("general")}>General</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("health")}>Health</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("science")}>Science</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("sports")}>Sports</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("technology")}>Technology</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
