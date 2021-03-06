import React, { useState, useContext } from "react";
import style from "./register.module.css";
import toast from "react-hot-toast";
import Userdatacontext from "../../context/Userdatacontext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const userData = useContext(Userdatacontext);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [rollnumber, setrollnumber] = useState("");
  const handleonsubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !number || !rollnumber) {
      toast.error("field never be empty");
      return;
    }
    try {
      const response = await fetch("/user/create", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          rollnumber: rollnumber,
          Phonenumber: number,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.status) {
        localStorage.setItem(
          "data",
          JSON.stringify({
            name,
            number,
            rollnumber,
            email,
            Pid: data.data.Pid,
          })
        );
        userData.setuserPid(data.data.Pid);
        userData.setuseremail(email);
        userData.setusername(name);
        userData.setusernumber(number);
        userData.setuserrollnumber(rollnumber);
        const otpresponce = await fetch("/otp/genrate", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });
        const otpdata = await otpresponce.json();

        console.log(otpdata);
        if (otpdata.status) {
          toast.success(otpdata.msg);

          navigate("/otpverify");
        } else {
          toast.error(otpdata.msg);
        }
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={style.tvyomregisterform}>
      <form className="container" onSubmit={(e) => handleonsubmit(e)}>
        <h1
          className="my-10 mb-4"
          style={{ textAlign: "center", color: "black" }}
        >
          Register yourself
        </h1>
        <div className="form-outline mb-4">
          <label
            style={{ color: "black", marginBottom: "2px", fontSize: "24px" }}
            className="form-label"
            htmlFor="form6Example1"
          >
            Full name:
          </label>
          <input
            type="text"
            value={name}
            id="form6Example1"
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="form-control"
            style={{
              border: "2px solid rgb(5, 55, 105)",
              background: "#EDEADE",
              height: "36px",
            }}
          />
        </div>

        <div className="form-outline mb-4">
          <label
            style={{ color: "black", marginBottom: "2px", fontSize: "24px" }}
            className="form-label"
            htmlFor="form6Example5"
          >
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            id="form6Example5"
            className="form-control"
            style={{
              border: "2px solid rgb(5, 55, 105)",
              background: "#EDEADE",
              height: "36px",
            }}
          />
        </div>

        <div className="form-outline mb-4">
          <label
            style={{ color: "black", marginBottom: "2px", fontSize: "24px" }}
            className="form-label"
            htmlFor="form6Example6"
          >
            Phone:
          </label>
          <input
            value={number}
            type="tel"
            id="form6Example6"
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            className="form-control"
            style={{
              border: "2px solid rgb(5, 55, 105)",
              background: "#EDEADE",
              height: "36px",
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <label
            style={{ color: "black", marginBottom: "2px", fontSize: "24px" }}
            className="form-label"
            htmlFor="form6Example6"
          >
            Rollnumber:
          </label>
          <input
            onChange={(e) => {
              setrollnumber(e.target.value);
            }}
            type="tel"
            value={rollnumber}
            id="form6Example6"
            className="form-control"
            style={{
              border: "2px solid rgb(5, 55, 105)",
              background: "#EDEADE",
              height: "36px",
              marginBottom: "45px",
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Verify email
        </button>
      </form>
    </div>
  );
};

export default Register;
