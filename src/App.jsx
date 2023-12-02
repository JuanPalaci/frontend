
import React from "react";
import Homepage from "./assets/components/Homepage";
import Login from "./assets/components/Login";
import Form from "./assets/components/FirstForm";
import PrincipalForm from "./assets/components/PrincipalForm";
import FinalForm from "./assets/components/FinalForm";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Menu from './assets/components/Menu';
import RecipeCard from './assets/components/RecipeCard';
import { useState } from "react";

const App = () => {
  const [tags, setTags] = useState([]);

  const obtenerdatos= (e)=>{
    let finalform = e;
    setTags (finalform);
  }

  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/PrincipalForm" element={<PrincipalForm  />} />
        <Route path="/UserPage" element={<Menu/>} />
        <Route path="/FinalForm" element={<FinalForm  />}/>
      </Routes>
    </Router>
  );
};

export default App;

