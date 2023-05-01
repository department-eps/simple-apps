import { Routes, Route } from "react-router-dom";
import PowerAngle from "./components/PowerAngle/Inputs/PowerAngleInputs";
import Header from "./components/Header/Header";
import RotorAngle from "./components/RotorAngle/Inputs/RotorAngleInputs";
import Kirchhoff from "./components/Kirchhoff/Kirchhoff";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PowerAngle />} />
        <Route path='/rotor-angle' element = {<RotorAngle />} />
        <Route path='/kirchhoff' element = {<Kirchhoff />}></Route>
      </Routes>
    </>
  )
}

export default App;
