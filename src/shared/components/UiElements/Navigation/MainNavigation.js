import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop";
import "./MainNavigation.css";

const MainNavigation = props => {
  // drawIsOpen is state var name. useState returns a function (named in second arr. el). This is to set the state
  const [drawIsOpen, setDrawIsOpen] = useState(false);

  //sets state
  const openDrawerHandler = () => {
    setDrawIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawIsOpen(false);
  };

  return (
    <>
      {/* same as {drawIsOpen ? do thing : null} where Backdrop is do thing */}
      {drawIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer onClick={closeDrawerHandler} show={drawIsOpen}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">People in Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
