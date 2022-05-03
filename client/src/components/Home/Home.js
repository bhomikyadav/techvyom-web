import React, { useContext, useEffect, useState } from "react";
import style from "./Home.module.css";
import Footer from "../Footer/Footer";
import Mycomp from "../myconponent/Mycomp";
import Userdatacontext from "../../context/Userdatacontext";

const Home = () => {
  const userdata = useContext(Userdatacontext);
  const [Show, setShow] = useState(false);
  const handleonshowfunction = () => {
    if (window.scrollY >= 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", handleonshowfunction);
  useEffect(() => {
    userdata.collectdata();
  }, []);
  return (
    <>
      <div className={style.tvyomhomepage}></div>
      <Mycomp Show={Show} />
      <Footer />
    </>
  );
};

export default Home;
