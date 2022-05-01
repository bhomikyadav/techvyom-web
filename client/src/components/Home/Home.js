import React, { useContext, useEffect } from "react";
import style from "./Home.module.css";
import Footer from "../Footer/Footer";
import Mycomp from "../myconponent/Mycomp";
import Userdatacontext from "../../context/Userdatacontext";

const Home = () => {
  const userdata = useContext(Userdatacontext);
  useEffect(() => {
    userdata.collectdata();
  }, []);
  return (
    <>
      <div className={style.tvyomhomepage}></div>
      <Mycomp />
      <Footer />
    </>
  );
};

export default Home;
