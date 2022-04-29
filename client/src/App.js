import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import SRegisterEvent from "./components/SRegisterevent/SRegisterEvent";
import GRegisterEvent from "./components/GRegisterEvent/GRegisterEvent";
import Otpverifypage from "./components/Otpverifypage/Otpverifypage";
import Userdatastate from "./context/UserdataState";

function App() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);

  return (
    <>
      <Userdatastate>
        {Loading ? (
          <Loader />
        ) : (
          <>
            <Toaster />
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/otpverify" element={<Otpverifypage />} />
                <Route path="/Sevent/:Ecode" element={<SRegisterEvent />} />
                <Route path="/Gevent/:Ecode" element={<GRegisterEvent />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </Userdatastate>
    </>
  );
}

export default App;
