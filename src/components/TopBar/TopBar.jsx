import React, { Component } from "react";
import './TopBar.css';
import '../../index.css';

function TopBar() {
  return (
    <>
      <nav className={`topbar-nav inter-400`}>
        <ul className="topbar-ul">
        <li>Home</li>
        <li>Shop</li>
        </ul>  
      </nav>
    </>
  );
}

export default TopBar;