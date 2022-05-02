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
    <div style={{ background: 'rgb(163,199,255)',
    background: 'linear-gradient(90deg, rgba(163,199,255,1) 1%, rgba(0,93,189,1) 99%)',marginTop:'5vh'}}>
      <form
        className="container"
        style={{width:'30%',margin:'auto',padding:'20px',borderRadius:'20px' }}
        onSubmit={(e) => handleonsubmit(e)}
      >
        <h1 className="my-10 mb-4" style={{ textAlign: "center", color: "black" }}>
            Register yourself
        </h1>
        <div className="form-outline mb-4">
          
          <label
            style={{ color: "black",marginBottom:'2px',fontSize:'20px' }}
            className="form-label"
            htmlFor="form6Example1"
          >
            Full name:
          </label>
          <input
            type="text"
            value={name}
            id="form6Example1"
            onChange={(e) => {setname(e.target.value);}}
            className="form-control"
            style={{border:'2px solid black',background:'#EDEADE',height:'30px'}}
          />
          
        </div>

        <div className="form-outline mb-4">
        <label
            style={{ color: "black",marginBottom:'2px',fontSize:'20px' }}
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
            style={{border:'2px solid black',background:'#EDEADE',height:'30px'}}
          />
         
        </div>

        <div className="form-outline mb-4">
        <label
            style={{ color: "black",marginBottom:'2px',fontSize:'20px' }}
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
            style={{border:'2px solid black',background:'#EDEADE',height:'30px'}}
          />
          
        </div>
        <div className="form-outline mb-4">
        <label
            style={{ color: "black",marginBottom:'2px',fontSize:'20px' }}
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
            style={{border:'2px solid black',background:'#EDEADE',height:'30px'}}
          />
         
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4" style={{marginLeft:'30%',marginTop:'20px',background:'transparent',border:'2px solid black',color:'black', borderRadius:'10px',fontSize:'18px',padding:'8px 40px'}}>
          Verify email
        </button>
      </form>
    </div>
  );
};

export default Register;
