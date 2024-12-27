import { BrowserRouter as Router, Routes, Route } from "react-router";
import App from "../pages/Home/index";
import About from "../pages/About/about";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact/index";

// Profile section
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

// Auth section
import AuthLayout from "../layouts/authLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />

        {/* profile section */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/logout/:id" />
        {/* Auth */}
        {"Auth"}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* not found */}
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
