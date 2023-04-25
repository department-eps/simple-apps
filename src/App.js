import { Routes, Route } from "react-router-dom";
import PowerAngle from "./components/PowerAngle/Inputs/PowerAngleInputs";
import Header from "./components/Header/Header";
import RotorAngle from "./components/RotorAngle/RotorAngleInputs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PowerAngle />} />
        <Route path='/rotor-angle' element = {<RotorAngle />} />
      </Routes>
    </>
  )
}

export default App;
