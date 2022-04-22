import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import CsEvents from "./components/events/CsEvents/CsEvents";
import Register from "./components/events/CsEvents/Register/Register";
import EcEvents from "./components/events/EcEvents/EcEvents";
import EcRegister from "./components/events/EcEvents/Register/EcRegister";
import MeEvents from "./components/events/MeEvents/MeEvents";
import MeRegister from "./components/events/MeEvents/Register/MeRegister";
import EnEvents from "./components/events/EnEvents/EnEvents";
import EnRegister from "./components/events/EnEvents/Register/EnRegister";
import PharmaEvents from "./components/events/PharmaEvents/PharmaEvents";
import PharmaRegister from "./components/events/PharmaEvents/Register/PharmaRegister";
import MRCEvents from "./components/events/MRC_Club/MRCEvents";
import MRCRegister from "./components/events/MRC_Club/Register/MRCRegister";
import LiteraryEvents from "./components/events/LiteraryClub/LiteraryEvents";
import LiteraryRegister from "./components/events/LiteraryClub/Register/LiteraryRegister";
import DesignEvents from "./components/events/DesignClub/DesignEvents";
import DesignRegister from "./components/events/DesignClub/Register/DesignRegister";
import LANWarEvents from "./components/events/LANWar/LANWarEvents";
import LANWarRegister from "./components/events/LANWar/Register/LANWarRegister";
import OpenEvents from "./components/events/OpenEvents/OpenEvents";
import OpenRegister from "./components/events/OpenEvents/Register/OpenRegister";
import Emailverifiction from "./components/Emailverification/Emailverification";
import Otpverify from "./components/Emailverification/Otpverify";
function App() {
  return (
    <BrowserRouter>
      <Toaster Toaster position="top-center" reverseOrder={false} gutter={40} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <Navbar />
              <Homepage />
            </div>
          }
        ></Route>
        <Route exact path="/mailverify" element={<Emailverifiction />}></Route>
        <Route exact path="/mailverify/otpverify" element={<Otpverify />} />

        <Route exact path="/cs-it-events" element={<CsEvents />}></Route>
        <Route
          exact
          path="/cs-it-events/register"
          element={<Register />}
        ></Route>
        <Route exact path="/ec-events" element={<EcEvents />}></Route>
        <Route
          exact
          path="/ec-events/register"
          element={<EcRegister />}
        ></Route>
        <Route exact path="/me-events" element={<MeEvents />}></Route>
        <Route
          exact
          path="/me-events/register"
          element={<MeRegister />}
        ></Route>
        <Route exact path="/en-events" element={<EnEvents />}></Route>
        <Route
          exact
          path="/en-events/register"
          element={<EnRegister />}
        ></Route>
        <Route exact path="/pharma-events" element={<PharmaEvents />}></Route>
        <Route
          exact
          path="/pharma-events/register"
          element={<PharmaRegister />}
        ></Route>
        <Route exact path="/mrc-events" element={<MRCEvents />}></Route>
        <Route
          exact
          path="/mrc-events/register"
          element={<MRCRegister />}
        ></Route>
        <Route
          exact
          path="/literary-events"
          element={<LiteraryEvents />}
        ></Route>
        <Route
          exact
          path="/literary-events/register"
          element={<LiteraryRegister />}
        ></Route>
        <Route exact path="/design-events" element={<DesignEvents />}></Route>
        <Route
          exact
          path="/design-events/register"
          element={<DesignRegister />}
        ></Route>
        <Route exact path="/lan-war-events" element={<LANWarEvents />}></Route>
        <Route
          exact
          path="/lan-war-events/register"
          element={<LANWarRegister />}
        ></Route>
        <Route exact path="/open-events" element={<OpenEvents />}></Route>
        <Route
          exact
          path="/open-events/register"
          element={<OpenRegister />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
