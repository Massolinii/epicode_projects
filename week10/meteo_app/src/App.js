import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import TownPage from "./components/TownPage";
import FavTowns from "./components/FavTowns";
import BottomNavbar from "./components/BottomNavbar";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <BottomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/town/:name" element={<TownPage />} />
          <Route path="/your-cities" element={<FavTowns />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
