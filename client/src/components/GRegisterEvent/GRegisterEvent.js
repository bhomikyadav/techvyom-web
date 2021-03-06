import React, { useContext, useEffect, useState } from "react";
import "./GRegisterEvent.css";
import Userdatacontext from "../../context/Userdatacontext";
import EventData from "../../EventData";
import { useParams, useNavigate } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import toast from "react-hot-toast";
const GRegisterEvent = () => {
  const navigate = useNavigate();
  const [tid, settid] = useState("");
  const userdata = useContext(Userdatacontext);
  const { Ecode } = useParams();
  const createnewgroup = async (event) => {

    event.preventDefault();
    if(userdata.username===""){
      navigate('/register')
      return;
          }
    try {
      const newg_responce = await fetch("/group/create", {
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
      const newg_data = await newg_responce.json();
      if (newg_data.status) {
        toast.success(newg_data.msg);
        toast.success("visit about section for details");
        navigate("/");
      } else {
        toast.error(newg_data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userdata.collectdata();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleonsubmit = async (event) => {
    event.preventDefault();
    if(userdata.username===""){
navigate('/register')
return
    }    if (tid === "") {
      return toast.error("Enter tid");
      
    }

    try {
      const responce = await fetch("/group/addme", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userdata.username,
          email: userdata.useremail,
          rollnumber: userdata.userrollnumber,
          Pid: userdata.userPid,
          tid,
          eventname: EventData[Ecode].Eventname,
        }),
      });
      const data = await responce.json();
      if (data.status) {
        toast.success(data.msg);
        toast.success("visit about section for details");
        navigate("/");
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      toast.error("internal error");
    }
  };
  return (
    <>
      <div className="tvyomGeventDetails" style={{ color: "black" }}>
        <h1 style={{ color: "black", textAlign: "center", marginTop: "-20px" }}>
          {EventData[Ecode].Eventname} details
        </h1>
        <div style={{ color: "black" }}>
          <div className="tvyomGeventDetailsd1">
            <h3 style={{ color: "black" }}>Introduction :</h3>
            <p>{EventData[Ecode].Eventintro}</p>
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
                &ensp;{EventData[Ecode].EventRule}
              </li>
            </ul>
            <br />

           
            { userdata.username===""?<> <span style={{ fontWeight: "400", color: "rgb(105,105,105)" }}>
              * Want to participate in this event?{" "}<button
                    style={{
                      border: "none",
                      background: "none",
                      color: "#f857a8",
                    }}
                    onClick={(e) => {
                      navigate('/register');
                    }}
                  >
                    First Register Yourself
                  </button></span>  <br />
            <span
              style={{
                marginLeft: "10%",
                fontWeight: "400",
                color: "rgb(105,105,105)",
              }}
            >
              Or
            </span>
            <br /></> :"" }
            
          
            <span style={{ fontWeight: "400", color: "rgb(105,105,105)" }}>
              Already Registered?{" "}
              <button
                style={{ border: "none", background: "none", color: "#f857a8" }}
                onClick={(e) => {
                  createnewgroup(e);
                }}
              >
                Create Team
              </button>
            </span>
            <br />
            <span
              style={{
                marginLeft: "10%",
                fontWeight: "400",
                color: "rgb(105,105,105)",
              }}
            >
              Or
            </span>
            <br />
            <input
              type="text"
              value={tid}
              onChange={(e) => {
                settid(e.target.value);
              }}
              placeholder="Enter TID here"
              style={{
                width: "70%",
                height: "32px",
                margin: "15px auto",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            />
            <br />
            <button
              onClick={(e) => {
                handleonsubmit(e);
              }}
            >
             {userdata.username===""?'Register yourself':'apply'}
            </button>
          </div>
          <div className="tvyomGeventDetailsd2">
            <img src={`/images/${EventData[Ecode].img}`} />
            <div style={{ textAlign: "left", marginTop: "20px" }}>
              <h3>Event Details:</h3>
              <h6>Name:</h6>
              <span> {EventData[Ecode].Eventname}</span>
              <br />
              <h6>Club:</h6>
              <span> {EventData[Ecode].EventClub}</span>
              <br />
              <h6>Code:</h6>
              <span> {EventData[Ecode].EventCode}</span>
              <br />
              <h6>Mentor:</h6>
              <span> {EventData[Ecode].Eventmentor}</span>
              <br />
              <h6>Members:</h6>
              <span>{EventData[Ecode].Grouped ? "Grouped" : "single"}</span>
              <br />
              <h6>Mentor Email:</h6>
              <span> {EventData[Ecode].Eventmentoremail}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GRegisterEvent;
