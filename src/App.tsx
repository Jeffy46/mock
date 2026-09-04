import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Hero,
  Map,
  SpaceGrid,
  Community,
  Footer,
  AnimatedBackground,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 container mx-auto py-8 space-y-8">
        <Hero></Hero>
        <Map></Map>
        <SpaceGrid></SpaceGrid>
        <Community></Community>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
