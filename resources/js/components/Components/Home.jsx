/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { createRoot } from "react-dom/client";
import { Outlet } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1 className="box-border flex items-center justify-center font-serif text-5xl font-bold py-60 text-slate-100">
                Home Page{" "}
            </h1>
        </div>
    );
}

export default Home;
