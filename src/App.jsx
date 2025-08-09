import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/public/login/Login';
import Register from "./pages/public/register/Register";
import Recover from "./pages/public/recover/recover";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recover" element={<Recover />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
