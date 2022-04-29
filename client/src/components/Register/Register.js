import React, { useState, useContext } from "react";
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
    userData.working();
    event.preventDefault();
    console.log(name + "\n" + number + "\n" + rollnumber + "\n" + email);
    try {
      const response = await fetch("http://localhost:5000/user/create", {
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
      await userData.setuserPid(data.data.Pid);
      if (data.status) {
        userData.setuseremail(email);
        userData.setusername(name);
        userData.setusernumber(number);
        userData.setuserrollnumber(rollnumber);
        const otpresponce = await fetch("http://localhost:5000/otp/genrate", {
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
          toast.success(`your Pid : ${userData.userPid}`);
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
    <>
      <form
        className="container"
        style={{ marginTop: "100px" }}
        onSubmit={(e) => handleonsubmit(e)}
      >
        <div className="form-outline">
          <h1 className="my-10" style={{ textAlign: "center", color: "black" }}>
            Register yourself
          </h1>
          <input
            type="text"
            value={name}
            id="form6Example1"
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="form-control"
          />
          <label
            style={{ color: "black" }}
            className="form-label"
            htmlFor="form6Example1"
          >
            Full name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            id="form6Example5"
            className="form-control"
          />
          <label
            style={{ color: "black" }}
            className="form-label"
            htmlFor="form6Example5"
          >
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            value={number}
            type="tel"
            id="form6Example6"
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            className="form-control"
          />
          <label
            style={{ color: "black" }}
            className="form-label"
            htmlFor="form6Example6"
          >
            Phone
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            onChange={(e) => {
              setrollnumber(e.target.value);
            }}
            type="tel"
            value={rollnumber}
            id="form6Example6"
            className="form-control"
          />
          <label
            style={{ color: "black" }}
            className="form-label"
            htmlFor="form6Example6"
          >
            Rollnumber
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Verify email
        </button>
      </form>
    </>
  );
};

export default Register;