import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Inputs from "./components/power-angle equation/Inputs";
import MenuAppBar from "./components/Navigation";
import RotorAngle from './components/rotor-angle/Inputs';

function App() {
  return (
    <div>
      <MenuAppBar />
      <Router>
        <Routes>
          <Route path="/simple-apps/" element={<Inputs />} />
          <Route path="/simple-apps/rotor-angle" element={<RotorAngle />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}
export default App;
