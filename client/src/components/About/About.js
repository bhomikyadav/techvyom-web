import React, { useContext, useEffect } from "react";
import "./About.css";
import userdatacontext from "../../context/Userdatacontext";
function About() {
  const userdata = useContext(userdatacontext);
  useEffect(() => {
    userdata.collectdata();
  }, []);

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
          {" "}
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
              <span>{userdata.userPid}</span>
              <br />
              {/* <h6>Events Registered</h6>
        <ul
          style={{
            display: "inline-block",
            position: "absolute",
            color: "black",
            lineHeight: "40px",
          }}
        >
          <li>Event 1</li>
          <li>Event 2</li>
        </ul> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default About;
