import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeCalendar from "./components/HomeCalendar";
import DayDetail from "./components/DayDetail";
import NewRecipe from "./components/NewRecipe";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1>レシピ記録アプリ</h1>
        <Routes>
          <Route path="/" element={<HomeCalendar />} />
          <Route path="/detail/:date" element={<DayDetail />} />
          <Route path="/new-recipe" element={<NewRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
