import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RotorAngle from "./components/RotorAngle/RotorAngle"
import Kirchhoff from "./components/KirchhoffLaw/KirchhoffLaw";
import TransformerLosses from "./components/TransformerLosses/TransformerLosses";
import PowerLineLosses from "./components/PowerLineLosses/PowerLineLosses";
import PowerAngle from "./components/PowerAngle/PowerAngle";
import Home from "./components/Home/Home";
import ElectromagneticForce from "./components/ElectromagneticForce/ElectromagneticForce";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/power-angle" element={<PowerAngle />} />
        <Route path='/rotor-angle' element = {<RotorAngle />} />
        <Route path='/kirchhoff' element = {<Kirchhoff />}></Route>
        <Route path='/transformer-losses' element = {<TransformerLosses />}></Route>
        <Route path='/power-line-losses' element = {<PowerLineLosses />}></Route>
        <Route path='/em-force' element = {<ElectromagneticForce />}></Route>
      </Routes>
    </>
  );
};

export default App;
