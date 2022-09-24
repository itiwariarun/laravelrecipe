import React from "react";
import { createRoot } from "react-dom/client";

import { NavLink, Outlet } from "react-router-dom";

function Header() {
    return (
        <div className="container fixed z-50">
            <div className="maina">
                {" "}
                <div className="py-3 md:w-11/12">
                    {" "}
                    <div className="mainb">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "activetab" : undefined
                            }
                            to={"/register"}
                        >
                            Register
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "activetab" : undefined
                            }
                            to={"/login"}
                        >
                            Login
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "activetab" : undefined
                            }
                            to={"/dashboard"}
                        >
                            Dashboard
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
