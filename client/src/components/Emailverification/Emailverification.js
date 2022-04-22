import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Emailverification = () => {
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const handleonsubmit = async (event) => {
    event.preventDefault();
    if (email !== "") {
      try {
        const response = await fetch("http://localhost:5000/otp/genrate", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });

        const data = await response.json();
        if (data.status) {
          toast.success(data.msg);
          navigate("/mailverify/otpverify", {
            state: {
              email,
            },
          });
        } else {
          toast.error(data.msg);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="container my-5">
        <form onSubmit={(e) => handleonsubmit(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Emailverification;
