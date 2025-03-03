import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import "./App.css";
import Navbar from "./components/Navbar";
import CatPage from "./pages/CatPage";
import DogPage from "./pages/DogPage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/cats" element={<CatPage />} />
          <Route path="/dogs" element={<DogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
