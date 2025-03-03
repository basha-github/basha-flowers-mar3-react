import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllFlowers from "./components/AllFlowers";
import RoseFlowers from "./components/RoseFlowers";
import JasmineFlowers from "./components/JasmineFlowers";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/all" element={<AllFlowers />} />
          <Route path="/rose" element={<RoseFlowers />} />
          <Route path="/jasmine" element={<JasmineFlowers />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}
