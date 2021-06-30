import React from "react";

//Stateless Functional Component
const NavBar = ({ totalCounters, onReset }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand text-light" href="#home">
        Navbar{"  "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
      <button onClick={onReset} className="btn-primary btn-sm m-2">
        Reset
      </button>
    </nav>
  );
};

export default NavBar;
