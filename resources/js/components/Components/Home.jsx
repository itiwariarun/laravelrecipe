/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {createRoot} from "react-dom/client";
import { Outlet } from "react-router-dom";


function Home() {
  return (
    <div>
    
          <h1 className="text-5xl text-slate-100 font-bold flex justify-center items-center py-10 font-serif">Home Page </h1>
    
      <Outlet />
    </div>
  );
}

export default Home;
if (document.getElementById('Home')) {
  const root = createRoot(document.getElementById('Home'));
root.render(<Home />);
}
