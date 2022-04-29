import Userdatacontext from "./Userdatacontext";
import React, { useState } from "react";

const Userdatastate = (props) => {
  const [userPid, setuserPid] = useState("");
  const [useremail, setuseremail] = useState("");
  const [username, setusername] = useState("");
  const [usernumber, setusernumber] = useState("");
  const [userrollnumber, setuserrollnumber] = useState("");
  const working = () => {
    console.log(" working context");
  };
  return (
    <Userdatacontext.Provider
      value={{
        working,
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
