import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/public/login/Login';
import Register from "./pages/public/register/Register";
import Recover from "./pages/public/recover/Recover";
import Home from "./pages/private/home/Home";
import PadraoLayout from "./components/layout/PadraoLayout";
import RotaPrivadaLayout from "./components/layout/RotaPrivadaLayout";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<PadraoLayout><Login /></PadraoLayout>} />
          <Route path="/register" element={<PadraoLayout><Register /></PadraoLayout>} />
          <Route path="/recover" element={<PadraoLayout><Recover /></PadraoLayout>} />
          <Route element={<RotaPrivadaLayout />}>
            <Route path="/home" element={<PadraoLayout><Home /></PadraoLayout>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;