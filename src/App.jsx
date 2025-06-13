import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import PrivateToLogin from "./component/PrivateToLogin";

import Home from "./pages/Home";
import About from "./pages/About";
import FiturChekUp from "./pages/fiturcheck/ChekcupView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/cek-keuangan" element={<FiturChekUp />} />
        <Route path="/wajib-login" element={<PrivateToLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
