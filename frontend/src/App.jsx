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
import Blog from "./pages/Blog";
import SpringRegistration from "./pages/SpringRegistration";
import AAUSeasonAnnouncement from "./pages/AAUSeasonAnnouncement";
import StudentAthleteAchievements from "./pages/StudentAthleteAchievements";
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/spring-registration" element={<SpringRegistration />} />
          <Route path="/blog/aau-season-announcement" element={<AAUSeasonAnnouncement />} />
          <Route path="/blog/student-athlete-achievements" element={<StudentAthleteAchievements />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
