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
      const f_responce = await fetch("/forgot", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rollnumber,
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

        localStorage.setItem(
          "data",
          JSON.stringify({
            name: data.name,
            number: data.number,
            rollnumber: data.rollnumber,
            email: data.email,
            Pid: data.Pid,
          })
        );

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
        style={{
          backgroundColor: " rgb(163,199,255)",
          background:
            "linear-gradient(90deg, rgba(163,199,255,1) 1%, rgba(0,93,189,1) 99%)",
          overflowY: "hidden",
          minHeight: "80vh",
        }}
      >
        <div
          className="container h-100"
          style={{
            paddingTop: "1.7rem",
            paddingBottom: "1.7rem",
            overflowY: "hidden",
          }}
        >
          <div className="row d-flex justify-content-center align-items-center">
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
                              alt="imagehere"
                              style={{ height: "80px", width: "80px" }}
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
                          className="fw-normal mb-2 pb-2"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            rollnumber
                          </label>
                          <input
                            type="email"
                            id="form2Example17"
                            value={rollnumber}
                            onChange={(e) => setrollnumber(e.target.value)}
                            className="form-control form-control-lg"
                          />
                        </div>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Pid
                          </label>
                          <input
                            type="text"
                            id="form2Example27"
                            value={Pid}
                            onChange={(e) => setPid(e.target.value)}
                            className="form-control form-control-lg"
                          />
                        </div>
                        <p
                          onClick={(e) => {
                            handleonclickforgot(e);
                          }}
                          className="mb-3 pb-lg-2"
                          style={{ color: "#393f81",cursor:'pointer' }}
                        >
                          Forgot pid?{" "}
                        </p>

                        <div className="pt-1 mb-2">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={(e) => handleonclick(e)}
                            style={{ padding: "8px 25px" }}
                          >
                            Login
                          </button>
                        </div>

                        <p className="pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <Link to="/register" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>

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
