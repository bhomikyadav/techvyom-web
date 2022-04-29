import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Userdatacontext from "../../context/Userdatacontext";
import EventData from "../../EventData";

const RegisterEvent = () => {
  const { Ecode } = useParams();
  const userdata = useContext(Userdatacontext);
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
      <div className="container" style={{ color: "black", marginTop: "5%" }}>
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
      </div>
    </>
  );
};

export default RegisterEvent;
