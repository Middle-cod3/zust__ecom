
import { Routes, Route } from "react-router-dom";

import Aheader from "./components/Aheader";
import Home from "./Home/Home";



function Admin() {
  return (
    <div className="Admin">
      <Aheader />
      <Routes>
        <Route path="/admin" element={<Home />} />
 
      </Routes>



     
    </div>
  );
}

export default Admin;
