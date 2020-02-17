import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside onClick={props.onClick} className="side-drawer">{props.children}</aside>
    </CSSTransition>
  );

  //createPortal allows us to render content somewhere other than standard behaviour.
  //I created div in index.html and called a div "drawer-hook". Call the method, pass in content and location.
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
