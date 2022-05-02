import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import Userdatacontext from "../../context/Userdatacontext";
import EventData from "../../EventData";
import "./SRegisterEvent.css";
import GridViewIcon from "@mui/icons-material/GridView";

const RegisterEvent = () => {
  const [navigatetoregiser, setnavigatetoregiser] = useState(false);
  const navigate = useNavigate();
  const { Ecode } = useParams();
  const userdata = useContext(Userdatacontext);
  useEffect(() => {
    userdata.collectdata();
  }, []);

  const handlesubmit = async (event) => {
    event.preventDefault();
    if (!userdata.name) {
      navigate("/register");
    }
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
        navigate("/");
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {navigatetoregiser ? (
        <>
          <Navigate to="/register" />
        </>
      ) : (
        <>
          <div className="tvyomeventintropage" style={{ color: "black" }}>
            <h1
              style={{
                color: "black",
                textAlign: "center",
                marginTop: "-20px",
              }}
            >
              Event details
            </h1>
            <div style={{ color: "black" }}>
              <div className="tvyomeventintropaged1">
                <h3>Introduction :</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
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
                    &ensp;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </li>
                  <li>
                    <GridViewIcon
                      style={{
                        transform: "rotate(45deg)",
                        verticalAlign: "middle",
                        fontSize: "18px",
                      }}
                    />
                    &ensp;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </li>
                  <li>
                    <GridViewIcon
                      style={{
                        transform: "rotate(45deg)",
                        verticalAlign: "middle",
                        fontSize: "18px",
                      }}
                    />
                    &ensp;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </li>
                  <li>
                    <GridViewIcon
                      style={{
                        transform: "rotate(45deg)",
                        verticalAlign: "middle",
                        fontSize: "18px",
                      }}
                    />
                    &ensp;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </li>
                </ul>
                <br />

                <span style={{ fontWeight: "400", color: "rgb(105,105,105)" }}>
                  * Want to participate in this event?{" "}
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      color: "#f857a8",
                    }}
                    onClick={(e) => {
                      setnavigatetoregiser(true);
                    }}
                  >
                    First Register Yourself
                  </button>
                </span>
                <br />
                <br />
                <button onClick={(e) => handlesubmit(e)}>Register</button>
              </div>
              <div className="tvyomeventintropaged2">
                <img src={`/images/${EventData[Ecode].img}`} alt="img" />
                <div style={{ textAlign: "left", marginTop: "20px" }}>
                  <h3>Event Details:</h3>
                  <h6>Name:</h6>
                  <span> {EventData[Ecode].Eventname}</span>
                  <br />
                  <h6>Club:</h6>
                  <span>{EventData[Ecode].EventClub} </span>
                  <br />
                  <h6>Code:</h6>
                  <span>{EventData[Ecode].EventCode}</span>
                  <br />
                  <h6>Mentor:</h6>
                  <span>{EventData[Ecode].Eventmentor}</span>
                  <br />
                  <h6>Members:</h6>
                  <span>{EventData[Ecode].Grouped ? "Grouped" : "single"}</span>
                  <br />
                  <h6>Mentor Email:</h6>
                  <span>{EventData[Ecode].Eventmentoremail}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RegisterEvent;
