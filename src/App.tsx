import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Leaderboard from "./pages/Leaderboard";
import { AnimatedBackground, Footer, Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedBackground />
      <Routes>
        <Route path="/mock" element={<Homepage />} />
        <Route path="/mock/leaderboard" element={<Leaderboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
