import React from "react";
import style from "./Navbar.module.css";
const navbar = (props) => {
  return (
    <header>
      <nav className={style.Navbar}>
        <h2 style={{ color: "white" }}>Employee Manager</h2>
      </nav>
    </header>
  );
};

export default navbar;
