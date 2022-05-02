import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Userdatacontext from "../../context/Userdatacontext";

const Login = () => {
  const navigate = useNavigate();
  const [rollnumber, setrollnumber] = useState("");
  const [Pid, setPid] = useState("");
  const userdata = useContext(Userdatacontext);
  useEffect(() => {
    userdata.collectdata();
  }, []);
  const handleonclickforgot = async (e) => {
    if (!rollnumber) {
      toast.error("enter your rollnumber");
      return;
    }
    try {
      const f_responce = await fetch("http://localhost:5000/forgot", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rollnumber: rollnumber,
        }),
      });
      const f_data = await f_responce.json();
      if (f_data.status) {
        toast.success(f_data.msg);
      } else {
        toast.error(f_data.msg);
      }
    } catch (error) {
      toast.error("internal server error");
    }
  };

  const handleonclick = async () => {
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rollnumber: rollnumber,
          Pid,
        }),
      });
      const data = await response.json();
      if (data.status) {
        console.log(data);
        userdata.setusername(data.name);
        userdata.setuserPid(data.Pid);
        userdata.setuserrollnumber(data.rollnumber);
        userdata.setuseremail(data.email);
        userdata.setusernumber(data.number);
        userdata.setlocaldata();
        toast.success(data.msg);
        navigate("/");
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <section
        className="vh-100"
        style={{ backgroundColor: "#6081f7", marginTop: "5vh" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="/images/backlogin.png"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">
                            <img
                              src="/images/techvyom_logo.jpeg"
                              style={{ height: "100px", width: "100px" }}
                            />
                          </span>
                          <span
                            style={{
                              fontSize: "36px",
                              margin: "auto",
                              fontWeight: "700",
                              fontStyle: "italic",
                            }}
                          >
                            TECHVYOM
                          </span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            value={rollnumber}
                            onChange={(e) => setrollnumber(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            rollnumber
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example27"
                            value={Pid}
                            onChange={(e) => setPid(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Pid
                          </label>
                        </div>
                        <p
                          onClick={(e) => {
                            handleonclickforgot(e);
                          }}
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Forgot pid?{" "}
                        </p>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={(e) => handleonclick(e)}
                          >
                            Login
                          </button>
                        </div>

                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link to="/register" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          verify your email
                        </a>
                        <a href="#!" className="small text-muted"></a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
