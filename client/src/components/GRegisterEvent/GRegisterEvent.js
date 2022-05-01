import React, { useContext, useEffect, useState } from "react";
import './GRegisterEvent.css'
import Userdatacontext from "../../context/Userdatacontext";
import EventData from "../../EventData";
import { useParams } from "react-router-dom";
import GridViewIcon from '@mui/icons-material/GridView';
const GRegisterEvent = () => {
  const [tid, settid] = useState("");
  const userdata = useContext(Userdatacontext);
  const { Ecode } = useParams();

  useEffect(() => {
    userdata.collectdata();
  }, []);
  const handleonsubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      {/* <div className="container" style={{ color: "black", marginTop: "5%" }}>
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
      </div> */}
      <div className="tvyomGeventDetails" style={{ color: "black" }}>
            <h1 style={{ color: "black",textAlign:'center',marginTop:'-20px' }}>Event Name</h1>
            <div style={{ color: "black" }}>
            <div className="tvyomGeventDetailsd1">
                <h3 style={{ color: "black" }}>Introduction :</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <br/>
                
                <h3>Rules :</h3>
                <ul>
                    <li><GridViewIcon style={{transform:'rotate(45deg)',verticalAlign:'middle',fontSize:'18px'}}/>&ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li><GridViewIcon style={{transform:'rotate(45deg)',verticalAlign:'middle',fontSize:'18px'}}/>&ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li><GridViewIcon style={{transform:'rotate(45deg)',verticalAlign:'middle',fontSize:'18px'}}/>&ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li><GridViewIcon style={{transform:'rotate(45deg)',verticalAlign:'middle',fontSize:'18px'}}/>&ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
                <br/>
                
                <span style={{fontWeight:'400',color:'rgb(105,105,105)'}}>* Want to participate in this event? <button style={{border:'none',background:'none',color:'#f857a8'}}>First Register Yourself</button></span>
                <br/>
                <span style={{marginLeft:'10%',fontWeight:'400',color:'rgb(105,105,105)'}}>Or</span>
                <br/>
                <span style={{fontWeight:'400',color:'rgb(105,105,105)'}}>Already Registered? <button style={{border:'none',background:'none',color:'#f857a8'}}>Create Team</button></span>
                <br/>
                <span style={{marginLeft:'10%',fontWeight:'400',color:'rgb(105,105,105)'}}>Or</span>
                <br/>
                <input type="text" placeholder="Enter TID here" style={{width:'70%',height:'32px',margin:'15px auto',border:'2px solid black',borderRadius:'5px'}}/>
                <br/>
                <button>Register</button>
            </div>
            <div className="tvyomGeventDetailsd2">
                <img src="https://i.all3dp.com/wp-content/uploads/2015/10/27130922/11950515_1700903740139223_1658642607_n-300x300.jpg" alt="img" />
                <div style={{textAlign:'left',marginTop:'20px'}}>
                    <h3>Event Details:</h3>
                    <h6>Name:</h6><span>event name</span><br/>
                    <h6>Club:</h6><span>club name</span><br/>
                    <h6>Code:</h6><span>event code</span><br/>
                    <h6>Mentor:</h6><span>mentor name</span><br/>
                    <h6>Members:</h6><span>grouped/single</span><br/>
                    <h6>Mentor Email:</h6><span>example@example.com</span>
                </div>
            </div>
            </div>
        </div>
    </>
  );
};

export default GRegisterEvent;
