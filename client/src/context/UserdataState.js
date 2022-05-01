import Userdatacontext from "./Userdatacontext";
import React, { useState } from "react";

const Userdatastate = (props) => {
  const [userPid, setuserPid] = useState("");
  const [useremail, setuseremail] = useState("");
  const [username, setusername] = useState("");
  const [usernumber, setusernumber] = useState("");
  const [userrollnumber, setuserrollnumber] = useState("");

  const collectdata = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setusername(data.name);
      setuserrollnumber(data.rollnumber);
      setusernumber(data.number);
      setuserPid(data.Pid);
      setuseremail(data.email);
    }
  };
  return (
    <Userdatacontext.Provider
      value={{
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
