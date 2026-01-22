import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import StaffBoard from "./pages/StaffBoard";
import Classes from "./pages/Classes";
import Camps from "./pages/Camps";
import Register from "./pages/Register";
import Sponsor from "./pages/Sponsor";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/staff-board" element={<StaffBoard />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/camps" element={<Camps />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsor" element={<Sponsor />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
