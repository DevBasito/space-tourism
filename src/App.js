import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home.js';
import Nav from './Components/Nav/Nav.js';
import Destination from './Pages/Destinations/Destinations.js';
import Crew from './Pages/Crew/Crew.js';
import Technology from "./Pages/Technology/Technology.js";
import Footer from "./Components/Footer/Footer.js";

function App() {

  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
