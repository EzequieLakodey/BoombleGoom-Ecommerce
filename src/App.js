import "./App.css";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";

//PAGES
import Home from "./pages/Home/Home";

import ItemsDetailsContainer from "./components/ItemsDetailsContainer/ItemsDetailsContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/item/:id" element={<ItemsDetailsContainer />} />

          <Route path="*" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;