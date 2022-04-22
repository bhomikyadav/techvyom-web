import React,{useState} from 'react'
import Navbar from '../../../navbar/Navbar';
import './MeRegister.css'
import { Avatar } from "antd";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    py:5,
  };


function MeRegister() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState('')
    const [rollno, setRollno] = useState('')
    const [email, setEmail] = useState('')
    const [mobileno, setMobileno] = useState('')
    const [otp, setOtp] = useState('')
    function onclick(e){
        return(
            (name.length < 2 || name.length>25) ? "": 
            (rollno.length<10) ? "" : 
            (email.length<5) ? "" :
            (mobileno.length<10) ? "" :
            (otp.length<4) ? "" : handleOpen()
        )
    }
    function onsubmit(e){
        e.preventDefault();
        return false
    }
    return (
        <div className="meeventregister">
            <Navbar/>
            <div className="regform">
                <form className="form" onSubmit={onsubmit}>
                <Avatar className="avtr" src="https://joeschmoe.io/api/v1/random" />
                <h3>Welcome</h3>
                <input type="text" minLength="2" maxLength="25" placeholder="Enter Name" value={name} onInput={e => setName(e.target.value)} id="name" required="required"/>
                <input type="text" minLength="10" maxLength="13" name="rollnumber" placeholder="Enter Roll Number" value={rollno} onInput={e => setRollno(e.target.value)} required={true}/>
                <input type="email" maxLength="35" placeholder="Enter Email" value={email} onInput={e => setEmail(e.target.value)} required={true}/>
                <input type="telnet" minLength="10" maxLength="10" placeholder="Enter Mobile Number" value={mobileno} onInput={e => setMobileno(e.target.value)} required={true}/>
                <input type="text" maxLength="4" value={otp} onInput={e => setOtp(e.target.value)} placeholder="Enter Otp"/>
                <label>Select Event:-</label>
                <div className="eventselect">
                    <ul>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}} />Glider Plain Design</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Chain Reaction</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>The Micrones (Check your structure)</li>   
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>CAD tricks</li>
                    </ul>
                </div>
                <br />
                <button type="submit" style={{marginBottom:'50px'}} onClick={onclick}>Register</button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <div style={{textAlign:'center'}}>
                    <h4 id="modal-modal-title" style={{color:'green'}}>
                        You've Successfully registered!
                    </h4>
                    <br/>
                    <h3>Your PID is:</h3>
                    <h1>220145</h1>
                    <Link to="/">
                    <button onClick={handleClose} className="homebtn">Back to home</button>
                    </Link>
                </div>
                </Box>
            </Modal>
                </form>
            </div>
        </div>
    )
}

export default MeRegister
