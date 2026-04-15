import React from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import Navigation from "./Navigation";
import Style from "./navbar.module.css";

const NavComtainer = () => {
  return (
    <nav className={Style.nav}>
      <article>
        <Logo />
      </article>
      <article>
        <Navigation />
      </article>
      <article>
        <Profile />
      </article>
    </nav>
  );
};

export default NavComtainer;
