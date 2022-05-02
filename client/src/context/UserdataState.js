import Userdatacontext from "./Userdatacontext";
import React, { useState } from "react";

const Userdatastate = (props) => {
  const [userPid, setuserPid] = useState("");
  const [useremail, setuseremail] = useState("");
  const [username, setusername] = useState("");
  const [usernumber, setusernumber] = useState("");
  const [userrollnumber, setuserrollnumber] = useState("");

  const collectdata = () => {
    if (username === "") {
      const data = JSON.parse(localStorage.getItem("data"));
      if (data) {
        setusername(data.name);
        setuserrollnumber(data.rollnumber);
        setusernumber(data.number);
        setuserPid(data.Pid);
        setuseremail(data.email);
      }
    }
  };
  const setlocaldata = () => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        name: username,
        number: usernumber,
        rollnumber: userrollnumber,
        email: useremail,
        Pid: userPid,
      })
    );
  };
  return (
    <Userdatacontext.Provider
      value={{
        setlocaldata,
        collectdata,
        useremail,
        setuseremail,
        username,
        setusername,
        userrollnumber,
        setuserrollnumber,
        usernumber,
        setusernumber,
        userPid,
        setuserPid,
      }}
    >
      {props.children}
    </Userdatacontext.Provider>
  );
};
export default Userdatastate;
