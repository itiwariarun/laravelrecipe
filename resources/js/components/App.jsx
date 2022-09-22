import React from 'react';
import {createRoot} from 'react-dom/client';
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
function App() {
  return (
    <div
      className="displayx"
      style={{ backgroundImage: "url(/img/register_bg_2.png)" }}
    >
<BrowserRouter>
      <Header />
      <div className="">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </div>
</BrowserRouter>
    </div>
  );
}
export default App;

if (document.getElementById('App')) {
  const root = createRoot(document.getElementById('App'));
root.render(<App />);
}


