import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Leaderboard from "./pages/Leaderboard";
import { AnimatedBackground, Footer, Navbar } from "./components";
import Workshop from "./pages/Workshop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedBackground />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workshop" element={<Workshop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
