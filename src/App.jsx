import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Example from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";

// You must define the function separately if you're exporting it later
function App() {
  return (
    <div>
      <Example />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; // ✅ Ensure this line exists
