import React, { useState } from "react";
import "./Otpverify.module.css";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
const Otpverify = () => {
  let location = useLocation();
  const My_navigate = useNavigate();

  const [otp, setotp] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });
  const email = location.state?.email;
  const onchangeotp = (event, field) => {
    setotp({ ...otp, [field]: event.target.value });
  };

  const handleonsubmitbutton = async (e) => {
    const finalotp = `${otp.otp1}${otp.otp2}${otp.otp3}${otp.otp4}`;
    const response = await fetch("http://localhost:5000/otp/verifyotp", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: finalotp,
        email,
      }),
    });
    const data = await response.json();
    if (data.status) {
      toast.success(data.msg);
      My_navigate("/");
    } else {
      toast.error(toast.msg);
    }
  };

  return (
    <>
      {email ? (
        <>
          <div className="my-5" id="app">
            <div className="container height-100 d-flex justify-content-center align-items-center">
              <div className="position-relative">
                <div className="card p-2 text-center">
                  <h6>
                    Please enter the one time password <br />
                  </h6>
                  <div>
                    <span> sent to</span> <small>{email}</small>
                  </div>
                  <div
                    id="otp"
                    className="inputs d-flex flex-row justify-content-center mt-2"
                  >
                    <input
                      className="m-2 text-center form-control rounded"
                      type="text"
                      id="input1"
                      maxLength="1"
                      onChange={(e) => {
                        onchangeotp(e, "otp1");
                      }}
                    />
                    <input
                      className="m-2 text-center form-control rounded"
                      type="text"
                      id="input2"
                      maxLength="1"
                      onChange={(e) => {
                        onchangeotp(e, "otp2");
                      }}
                    />
                    <input
                      className="m-2 text-center form-control rounded"
                      type="text"
                      id="input3"
                      maxLength="1"
                      onChange={(e) => {
                        onchangeotp(e, "otp3");
                      }}
                    />
                    <input
                      className="m-2 text-center form-control rounded"
                      type="text"
                      id="input4"
                      maxLength="1"
                      onChange={(e) => {
                        onchangeotp(e, "otp4");
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={(e) => handleonsubmitbutton(e)}
                      className="btn btn-danger px-4 validate"
                    >
                      Validate
                    </button>
                  </div>
                  <div className="mt-3 content d-flex justify-content-center align-items-center">
                    <span>Didn't get the code</span>
                    <a href="#" className="text-decoration-none ms-3">
                      Resend(1/3)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Navigate to="/mailverify" />
        </>
      )}
    </>
  );
};

export default Otpverify;
