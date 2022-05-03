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
      const responce_otp = await fetch("/otp/verifyotp", {
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
        <div className="cardotp py-5 px-3" style={{ textAlign: "center" }}>
          <h5 className="m-0" style={{ color: "black" }}>
            Mobile phone verification
          </h5>
          <span className="mobile-text">
            Enter the 4 digit code we just send on your email 
            <b className="text-danger"> {userdata.useremail}</b>
          </span>
          <div className="d-flex flex-row my-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => {
                setotp(e.target.value);
              }}
              className="form-control"
              autoFocus=""
              style={{
                textAlign: "center",
                border: "1px solid rgb(5, 55, 105)",
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary text-center my-2"
            onClick={(e) => handleonsubmitotp(e)}
          >
            submit
          </button>
          <div className="text-center my-4">
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
