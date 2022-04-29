import React, { useContext, useState } from "react";
import Userdatacontext from "../../context/Userdatacontext";
import EventData from "../../EventData";
import { useParams } from "react-router-dom";
const GRegisterEvent = () => {
  const [tid, settid] = useState("");
  const userdata = useContext(Userdatacontext);
  const { Ecode } = useParams();
  const handleonsubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="container" style={{ color: "black", marginTop: "5%" }}>
        <h1 className="my-2" style={{ textAlign: "center", marginTop: "40px" }}>
          Event Details
        </h1>
        <form
          className="container  my-5"
          onSubmit={(e) => {
            handleonsubmit(e);
          }}
        >
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
              members :{`grouped`}
            </label>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Enter your Team ID (Tid)</label>
            <input
              type="text"
              value={tid}
              onChange={(e) => {
                settid(e.target.value);
              }}
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>

          <button
            type="submit"
            style={{ marginLeft: "10%" }}
            className="btn btn-primary btn-block mb-4 my-5"
          >
            Register
          </button>
          <button
            style={{ marginLeft: "10%" }}
            className="btn btn-primary btn-block mb-4 my-5"
          >
            create group
          </button>
        </form>
      </div>
    </>
  );
};

export default GRegisterEvent;
