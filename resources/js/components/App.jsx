import React from "react";
import { createRoot } from "react-dom/client";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Seller from "./Components/Seller";
import User from "./Components/User";

import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
function App() {
    return (
        <div
            className=" displayx"
            style={{ backgroundImage: "url(/img/register_bg_2.png)" }}
        >
            <BrowserRouter>
                <Header />
                <div className="">
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/login"} element={<Login />} />
                        <Route path={"/register"} element={<Register />} />
                        <Route path={"/dashboard"} element={<Dashboard />} />
                        <Route path={"/seller"} element={<Seller />} />

                        <Route path={"/user"} element={<User />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;

if (document.getElementById("App")) {
    const root = createRoot(document.getElementById("App"));
    root.render(<App />);
}
