import React from "react";
import { Link } from "react-router-dom";
import './nav-bar.sass'

const NavBar = () => {

  return (
    <div className="nav-bar">
        <div className="nav-bar__container">
            <ul className="nav-bar-container__first">
                <li>
                    <Link to="/">
                        Main
                    </Link>
                </li>
                <li>
                    <Link to="/shop">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/duefte">
                        Düfte
                    </Link>
                </li>
            </ul>
            <div className="nav-bar-container__logo">
                <Link to='/'>
                    <img src="/img/logo.png" alt="" />
                </Link>
            </div>
            <ul className="nav-bar-container__second">
                <li>
                    <Link to="/about-us">Über uns</Link>
                </li>
                <li>
                    <Link to="/history">Geschichte</Link>
                </li>
                <li>
                    <Link to="/korb">Korb</Link>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default NavBar;
