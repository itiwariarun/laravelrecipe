import React from "react";
import {createRoot} from "react-dom/client";

import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="maina">
        {" "}
        <div className="py-3 md:w-11/12">
          {" "}
          <div className="mainb">
            <NavLink
              
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "activetab" : undefined)}
              to={"/login"}
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "activetab" : undefined)}
              to={"/register"}
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Header;

if (document.getElementById('Header')) {
  const root = createRoot(document.getElementById('Header'));
root.render(<Header />);
}