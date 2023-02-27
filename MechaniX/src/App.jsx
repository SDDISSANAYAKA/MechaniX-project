import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import Garag from "./pages/Garag";
import "./App.css";
import Login from "./components/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminDash from "./pages/AdminDash/AdminDash";
import MechanicDash from "./pages/MechanicDash/MechanicDash";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="/garag" element={<Garag />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AdminDash" element={<AdminDash />} />
        <Route path="/MechanicDash" element={<MechanicDash />} />
      </Routes>
    </div>
  );
}

export default App;
