import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Inputs from "./components/PowerAngle/PowerAngleInputs"
import MenuAppBar from "./components/Navigation";
import RotorAngle from './components/rotor-angle/Inputs';

function App() {
  return (
    <div>
      <MenuAppBar />
      <Router basename="/simple-apps">
        <Routes>
          <Route path="/" element={<Inputs />} />
          <Route path="/rotor-angle" element={<RotorAngle />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}
export default App;
