import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Userdatacontext from "../../context/Userdatacontext";
import EventData from "../../EventData";
import "./SRegisterEvent.css";
import GridViewIcon from "@mui/icons-material/GridView";

const RegisterEvent = () => {
  const { Ecode } = useParams();
  const userdata = useContext(Userdatacontext);
  useEffect(() => {
    userdata.collectdata();
  }, []);

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const responce = await fetch("http://localhost:5000/add/event/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userdata.username,
          email: userdata.useremail,
          rollnumber: userdata.userrollnumber,
          eventname: EventData[Ecode].Eventname,
          Pid: userdata.userPid,
        }),
      });
      const data = await responce.json();
      if (data.status) {
        toast.success(data.msg);
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <div className="container" style={{ color: "black", marginTop: "5%" }}>
        <h1 className="my-2" style={{ textAlign: "center", marginTop: "40px" }}>
          Event Details
        </h1>
        <form className="container  my-5 ">
          <div className="form-outline" style={{ color: "black" }}>
            <label className="form-label" htmlFor="form6Example1">
              Your name:{userdata.username}
            </label>
          </div>

          <div style={{ color: "black" }} className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example5">
              Email :{userdata.useremail}
            </label>
          </div>

          <div style={{ color: "black" }} className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example6">
              Phone :{userdata.usernumber}
            </label>
          </div>
          <div style={{ color: "black" }} className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example6">
              Pid:{userdata.userPid}
            </label>
          </div>
          <div style={{ color: "black" }} className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example6">
              Event name :{EventData[Ecode].Eventname}
            </label>
          </div>
          <div style={{ color: "black" }} className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example6">
              Event mentor :{EventData[Ecode].Eventmentor}
            </label>
          </div>
          <div style={{ color: "black" }} className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example6">
              members :{`single`}
            </label>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              handlesubmit(e);
            }}
            className="btn btn-primary btn-block mb-4"
          >
            Register
          </button>
        </form>
      </div> */}
      <div className="tvyomeventintropage" style={{ color: "black" }}>
        <h1 style={{ color: "black",textAlign:'center',marginTop:'-20px' }}>Event Name</h1>
        <div style={{ color: "black" }}>
          <div className="tvyomeventintropaged1">
            <h3>Introduction :</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <br />

            <h3>Rules :</h3>
            <ul>
              <li>
                <GridViewIcon
                  style={{
                    transform: "rotate(45deg)",
                    verticalAlign: "middle",
                    fontSize: "18px",
                  }}
                />
                &ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>
                <GridViewIcon
                  style={{
                    transform: "rotate(45deg)",
                    verticalAlign: "middle",
                    fontSize: "18px",
                  }}
                />
                &ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>
                <GridViewIcon
                  style={{
                    transform: "rotate(45deg)",
                    verticalAlign: "middle",
                    fontSize: "18px",
                  }}
                />
                &ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>
                <GridViewIcon
                  style={{
                    transform: "rotate(45deg)",
                    verticalAlign: "middle",
                    fontSize: "18px",
                  }}
                />
                &ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <br />

            <span style={{ fontWeight: "400", color: "rgb(105,105,105)" }}>
              * Want to participate in this event?{" "}
              <button style={{border:'none',background:'none',color:'#f857a8'}}>First Register Yourself</button>
            </span>
            <br />
            <br />
            <button>Register</button>
          </div>
          <div className="tvyomeventintropaged2">
            <img
              src="https://i.all3dp.com/wp-content/uploads/2015/10/27130922/11950515_1700903740139223_1658642607_n-300x300.jpg"
              alt="img"
            />
            <div style={{ textAlign: "left",marginTop:'20px' }}>
              <h3>Event Details:</h3>
              <h6>Name:</h6>
              <span>event name</span>
              <br />
              <h6>Club:</h6>
              <span>club name</span>
              <br />
              <h6>Code:</h6>
              <span>event code</span>
              <br />
              <h6>Mentor:</h6>
              <span>mentor name</span>
              <br />
              <h6>Members:</h6>
              <span>grouped/single</span>
              <br />
              <h6>Mentor Email:</h6>
              <span>example@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterEvent;
