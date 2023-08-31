// import { useEffect, useState } from "react";
// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Photos from "./components/Photos";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="contener">
      <Routes>
        <Route path="/" element={<Photos/>}/>
        <Route path="/photo/:idPhoto" element={<Photo/>}/>
      </Routes>
    </div>
  );
}

export default App;
