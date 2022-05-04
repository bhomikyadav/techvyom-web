import React, { useContext, useEffect, useState } from "react";
import "./About.css";
import userdatacontext from "../../context/Userdatacontext";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  const userdata = useContext(userdatacontext);
  const [singledata, setsingledata] = useState([]);
  const [groupevent, setgroupevent] = useState([]);
  const verifymyemail = async () => {
    try {
      const emal_responce = await fetch("0/otp/genrate", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userdata.useremail }),
      });
      const data_email = await emal_responce.json();
      if (data_email.status) {
        navigate("/otpverify");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userdata.collectdata();
    handlesingleventdata();
    handleGroupevent();
  }, []);
  const handleGroupevent = async () => {
    try {
      const data = JSON.parse(localStorage.getItem("data"));
      if (data) {
        const group_data_responce = await fetch("/info/group", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Pid: data.Pid,
          }),
        });
        const group_data = await group_data_responce.json();
        if (group_data.status) {
          setgroupevent(group_data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlesingleventdata = async () => {
    try {
      const data = JSON.parse(localStorage.getItem("data"));
      if (data) {
        const single_data_responce = await fetch("/info/single", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Pid: data.Pid,
          }),
        });
        const single_data = await single_data_responce.json();
        if (single_data.status) {
          setsingledata(single_data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userdata.username === "" ? (
        <>
          <h1 style={{ marginTop: "5%", color: "black", textAlign: "center" }}>
            first Register yourself
          </h1>
        </>
      ) : (
        <>
          <div className="tvyomstudentdetails">
            <div style={{ textAlign: "left" }}>
              <h2>Your Details:</h2>
              <h6>Name:</h6>
              <span>{userdata.username}</span>
              <br />
              <h6>Roll No:</h6>
              <span>{userdata.userrollnumber}</span>
              <br />
              <h6>PID:</h6>
              <span>{userdata.userPid}</span>
              <br />
              <h6>Email:</h6>
              <span>{userdata.useremail}</span>
              <br />
              <h6>Single Events</h6>
              <ul
                style={{
                  display: "inline-block",
                  position: "absolute",
                  color: "black",
                  lineHeight: "40px",
                }}
              >
                <div style={{ display: "flex" }}>
                  {singledata.map((value, index) => {
                    return (
                      <li key={index} style={{ marginRight: "30px" }}>
                        {value.Eventname}
                      </li>
                    );
                  })}
                </div>
              </ul>
              <br />
              <h6 style={{ margintop: "1%" }}>group Events</h6>
              <ul
                style={{
                  display: "inline-block",
                  position: "absolute",
                  color: "black",
                  lineHeight: "40px",
                }}
              >
                {groupevent.map((value, index) => {
                  return (
                    <li key={index}>
                      {value.eventname} and Tid:{value.tid}
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              onClick={(e) => {
                verifymyemail(e);
              }}
              type="button"
              className="btn btn-success my-5 mx-5"
              style={{ textAline: "center" }}
            >
              verify your email
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default About;
