import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllFlowers from "./components/AllFlowers";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/all" element={<AllFlowers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
