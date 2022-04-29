import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import Userdatacontext from "../../context/Userdatacontext";
import "./Otpverifypage.css";
import { useNavigate } from "react-router-dom";

const Otpverifypage = () => {
  const userdata = useContext(Userdatacontext);
  const navigate = useNavigate();

  const [otp, setotp] = useState("");
  const handleonsubmitotp = async (event) => {
    event.preventDefault();
    try {
      const responce_otp = await fetch("http://localhost:5000/otp/verifyotp", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userdata.useremail, otp: otp }),
      });
      const data_otp = await responce_otp.json();
      if (data_otp.status) {
        toast.success(data_otp.msg);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center containerotp">
        <div className="cardotp py-5 px-3">
          <h5 className="m-0">Mobile phone verification</h5>
          <span className="mobile-text">
            Enter the 4 digit code we just send on your email 
            <b className="text-danger"> {userdata.useremail}</b>
          </span>
          <div className="d-flex flex-row mt-5">
            <input
              type="text"
              value={otp}
              onChange={(e) => {
                setotp(e.target.value);
              }}
              className="form-control"
              autoFocus=""
            />
          </div>
          <button
            type="button"
            className="btn btn-primary text-center my-2"
            style={{ marginLeft: "35%" }}
            onClick={(e) => handleonsubmitotp(e)}
          >
            submit
          </button>
          <div className="text-center mt-5">
            <span className="d-block mobile-text">Don't receive the code?</span>
            <span className="font-weight-bold text-danger cursorotp">
              Resend
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otpverifypage;
