import React from "react";
import style from './Home.module.css'
import Footer from "../Footer/Footer";
import Mycomp from "../myconponent/Mycomp";

const Home = () => {
  return (
    <>
    <div className={style.tvyomhomepage}></div>
      <Mycomp />
      <Footer />
    </>
  );
};

export default Home;
