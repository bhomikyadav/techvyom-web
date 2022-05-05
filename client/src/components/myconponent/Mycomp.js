import React, { useContext, useEffect, useState } from "react";
import "./Mycomp.css";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Userdatacontext from "../../context/Userdatacontext";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";

const Mycomp = ({ Show }) => {
  const userdata = useContext(Userdatacontext);
  useEffect(() => {
    userdata.collectdata();
  }, []);

  let navigate = useNavigate();

  return (
    <>
      {Show ? (
        <div
          style={{
            zIndex: "100",
            position: "fixed",
            right: "10px",
            bottom: "50vh",
          }}
        >
          <HashLink smooth to="#IDEVENTS">
            <button
              style={{
                border: "2px solid black",
                fontSize: "20px",
                borderRadius: "50%",
                height: "60px",
                width: "60px",
                background: "rgb(163,199,255)",
                background:
                  "linear-gradient(90deg, rgba(163,199,255,1) 1%, rgba(0,93,189,1) 99%)",
                color: "white",
              }}
            >
              <ArrowUpwardSharpIcon style={{ fontSize: "40px" }} />
            </button>
          </HashLink>
        </div>
      ) : (
        ""
      )}
      <section
        style={{
          padding: "4% 1%",
          justifyContent: "center",
          background: "silver",
        }}
        id="IDEVENTS"
      >
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="tvyomeventbtns">
            <HashLink smooth to="#IDROBOTRAXCLUB">
              <img
                src="/images/robotraxClub.jpg"
                style={{ height: "118px", width: "118px", borderRadius: "50%" }}
              />
              <br />
              <span style={{ color: "rgba(0,93,189,1)" }}>
                Robotrax <br /> Club
              </span>
            </HashLink>
          </div>
          <div className="tvyomeventbtns">
            <HashLink smooth to="#IDSYNERGYCLUB">
              <img
                src="/images/synergyClub.jpg"
                style={{ height: "118px", width: "118px", borderRadius: "50%" }}
              />
              <br />
              <span>
                Synergy <br /> Club
              </span>
            </HashLink>
          </div>
          <div className="tvyomeventbtns">
            {" "}
            <HashLink smooth to="#IDAERONAUTICSCLUB">
              <img
                src="/images/aeronauticsClub.jpg"
                style={{ height: "118px", width: "118px", borderRadius: "50%" }}
              />
              <br />
              <span>
                Aeronautics <br /> Club
              </span>
            </HashLink>
          </div>
          <div className="tvyomeventbtns">
            <HashLink smooth to="#IDEQUINOX&ILLUMINATICLUB">
              <img
                src="/images/equinoxClub.jpg"
                style={{ height: "118px", width: "118px", borderRadius: "50%" }}
              />
              <br />
              <span>
                Equinox & <br />
                Illuminati Club
              </span>
            </HashLink>
          </div>
          <div className="tvyomeventbtns">
            <HashLink smooth to="#IDLITERARAYCLUB">
              <img
                src="/images/literaryClub.jpg"
                style={{ height: "118px", width: "118px", borderRadius: "50%" }}
              />
              <br />
              <span>
                Literary <br /> Club
              </span>
            </HashLink>
          </div>
          <div className="tvyomeventbtns">
            <HashLink smooth to="#IDMRCCLUB">
              <img
                src="/images/mrcClub.jpg"
                style={{ height: "118px", width: "118px", borderRadius: "50%" }}
              />
              <br />
              <span>
                MRC <br /> Club
              </span>
            </HashLink>
          </div>

          <div className="tvyomeventbtns">
            <HashLink smooth to="#IDPHARMQUIMICACLUB">
              <img
                src="/images/pharmaquimicaClub.jpg"
                style={{ height: "118px", width: "118px", borderRadius: "50%" }}
              />
              <br />
              <span>
                Pharmquimica <br /> Club
              </span>
            </HashLink>
          </div>
          <div className="tvyomeventbtns">
            <HashLink smooth to="#IDDESIGNCLUB">
              <img
                src="/images/designClub.jpg"
                style={{ height: "118px", width: "118px", borderRadius: "50%" }}
              />
              <br />
              <span>
                Design <br /> Club
              </span>
            </HashLink>
          </div>
          <div className="tvyomeventbtns">
            <HashLink smooth to="#IDLANWAR">
              <img
                src="/images/lanWar.jpg"
                style={{ height: "118px", width: "118px", borderRadius: "50%" }}
              />
              <br />
              <span>
                LAN <br /> War
              </span>
            </HashLink>
          </div>
          <div className="tvyomeventbtns">
            <HashLink smooth to="#IDOPENEVENTS">
              <img
                src="/images/openEvents.jpg"
                style={{ height: "118px", width: "118px", borderRadius: "50%" }}
              />
              <br />
              <span>
                Open <br /> Events
              </span>
            </HashLink>
          </div>
        </div>
      </section>
      <section className="dark" id="section1">
        <div className="container py-4">
          <h1 className="h1 text-center" id="IDROBOTRAXCLUB">
            ROBOTRAX CLUB
          </h1>

          <article
            onClick={(e) => {
              navigate("/Gevent/011");
            }}
            className="postcard dark blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/runBhumi.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">Robo War</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                To Design a manual bot capable to fight with another bot with or
                without a weapon and damage it completely.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>011
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Gevent/012");
            }}
            className="postcard dark red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/roboRace.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red">
                <a href="#">Robo Race</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                The better you control your bot, better you make choices, better
                chances to compete your opponent. Construct a bot
                (Wired/wireless) which can reach the destination while
                traversing through hurdles, sharp turns, wavy and muddy paths
                and wedges etc
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>012
                </li>
                <li className="tag__item play red">
                  <i className="fas fa-play mr-2"></i>
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Gevent/013");
            }}
            className="postcard dark green"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="images/LineFollowerRobot.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title green">
                <a href="#">Line Follower Robot</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                LINE FOLLOWER ROBOT is one of the most exciting Robotics Event
                of all time. You just must move your bot through the given arena
                comprised of an interesting path. All you need is to make your
                bot compatible for every type of path that you can imagine, the
                path will be of BLACK colour and the background is going to be
                of WHITE colour. The Arena will be revealed during the
                competition. Tag Line: - Being on the Line will make you Shine.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>013
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Gevent/014");
            }}
            className="postcard dark yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/RobotSoccer.jfif"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title yellow">
                <a href="#">Robo Soccer</a>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                For all the techies as well as soccer fans out there, having
                desire of show-casing their talent in football, but also are too
                lazy to actually play football, here comes an event meant for
                you. All you need is a higher level of tenacity, passion for
                football, an all-time habit of beating your opponent and you are
                good to go.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>014
                </li>
              </ul>
            </div>
          </article>

          <article
            onClick={(e) => {
              navigate("/Gevent/015");
            }}
            className="postcard dark blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/MazeSolver.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">Maze Solver</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Maze solver is one of the most exciting event of Robotrax Club.
                You just have to solve the maze in the shortest time. <br /> All
                that you just need is to make your bot compatible enough to
                solve the maze, one can imagine. <br />
                You just have to take your ginie to its magic pot by solving the
                maze and the team doing this is shortest time will be the
                winner. The arena will be disclosed at the spot time.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i id="IDSYNERGYCLUB" className="fas fa-clock mr-2"></i>015
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* {============} */}
      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark">SYNERGY CLUB</div>

          <article
            onClick={(e) => {
              navigate("/Gevent/021");
            }}
            className="postcard light blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/DroneRace.jfif"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <a href="#">Drone Race</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                The better you control your drone, better you make choices,
                better chances to compete your opponent. Construct a drone which
                can reach the destination while flying through hurdles and sharp
                turns etc.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>021
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Gevent/022");
            }}
            className="postcard light red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/AquaRace.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title red">
                <a href="#">Aqua Race</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                In this event, the robots have to move the blocks of wood from
                one position (start) to the other position (stop) in water.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>022
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Gevent/023");
            }}
            className="postcard light green"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/RoboRumble.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title green">
                <a href="#">Robo Rumble</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Design remote-control Robot wireless and compete with another
                last stand out will be winners.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>023
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Gevent/024");
            }}
            className="postcard light yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/Drag&Place.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title yellow">
                <a href="#">Drag & Place</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Drag and Place is one of the most exciting synergy event. you
                just have to drag the obstacle and place it in their required
                places. the arena will be revealed during thecompetition.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>024
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/025");
            }}
            className="postcard light yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/JunkWar.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title yellow">
                <a href="#">Junk War</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                To build a model from E-Waste & That Model Should Show Some
                Output
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i id="IDAERONAUTICSCLUB" className="fas fa-clock mr-2"></i>
                  025
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* =============== */}
      <section className="dark">
        <div className="container py-4">
          <h1 className="h1 text-center" id="pageHeaderTitle">
            AERONAUTICS CLUB
          </h1>

          <article
            onClick={(e) => {
              navigate("/Gevent/031");
            }}
            className="postcard dark blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/ChainReaction.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">Chain reaction</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Chain Reaction is a sequence of reactions where a reactive
                product causes additional reactions to take place. In a Chain
                Reaction positive feedback leads to a self- amplifying chain of
                events.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>031
                </li>
              </ul>
            </div>
          </article>

          <article
            onClick={(e) => {
              navigate("/Sevent/032");
            }}
            className="postcard dark red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/TheMicrones.jfif"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red">
                <a href="#">The Micrones</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                The Machinist is an event of planning, creativity, imagination &
                innovation. A platform is provided to make your knowledge usable
                in a practical or technical working mechanism. With your
                knowledge of the working of any motion make a model to show the
                transmission of motion and win this event
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>032
                </li>
              </ul>
            </div>
          </article>

          <article
            onClick={(e) => {
              navigate("/Gevent/033");
            }}
            className="postcard dark green"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="images/gliderPlaneDesign.jfif"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title green">
                <a href="#">Glider Plane</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Participants will design and build a Glider Plane made of
                Balsawood, which will be launched by using a hand. The goal of
                the contest is to keep the glider aloft for the longest period
                of time.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>033
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/034");
            }}
            className="postcard dark yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/CadTricks.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title yellow">
                <a href="#">CAD Tricks</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                The 3D creation is an event of making 3d model in solid works of
                the given design.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i
                    id="IDEQUINOX&ILLUMINATICLUB"
                    className="fas fa-clock mr-2"
                  ></i>
                  034
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* ---------------------- */}
      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            EQUINOX & ILLUMINATI CLUB
          </div>

          <article
            onClick={(e) => {
              navigate("/Sevent/041");
            }}
            className="postcard light blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/webbattle.jpeg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <a href="#">Web Battle</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Design a web page (static or dynamic) on the theme provided.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>041
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/042");
            }}
            className="postcard light red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/beatTheBug.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title red">
                <a href="#">Beat-The-Bug</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Participants has to find a programming mistake or error in the
                given block of code
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>042
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/043");
            }}
            className="postcard light green"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/DBKnight.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title green">
                <a href="#">Db Knight</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Participants has to write a code /query for the schema(tables)
                provided.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>043
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/044");
            }}
            className="postcard light yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/Cexperts.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title yellow">
                <a href="#">C-Experts</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Participants have to perform Programming in C
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>044
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Gevent/045");
            }}
            className="postcard light yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/Techplay.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title yellow">
                <a href="#">Tech-Play</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Participants are required to perform a play on given problem.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  045
                  <i id="IDLITERARAYCLUB" className="fas fa-clock mr-2"></i>.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* =============== */}
      <section className="dark">
        <div className="container py-4">
          <h1 className="h1 text-center" id="pageHeaderTitle">
            LITERARAY CLUB
          </h1>

          <article
            onClick={(e) => {
              navigate("/Sevent/051");
            }}
            className="postcard dark blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/ArzKiyaHai.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">Arz kiya hai</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Recite your own poem, shayri, ghazal etc
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>051
                </li>
              </ul>
            </div>
          </article>

          <article
            onClick={(e) => {
              navigate("/Gevent/052");
            }}
            className="postcard dark red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/LetsGetQuizzical.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red">
                <a href="#">Let's Get Quizzical</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Literary, Technical and general knowledge questions(Buzzer
                Round)
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>052
                </li>
              </ul>
            </div>
          </article>

          <article
            onClick={(e) => {
              navigate("/Sevent/053");
            }}
            className="postcard dark green"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="images/SpellOWeen.jfif"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title green">
                <a href="#">Spell-O-Ween</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Spell and Pronounce the given word correctly and get rewarded.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>053
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Gevent/054");
            }}
            className="postcard dark yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/EscapeTheRoom.jfif"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title yellow">
                <a href="#">Escape The Room</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Play with the riddles. Everytime you solve a riddle, you will
                move forward one step closer to victory."
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>054
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/055");
            }}
            className="postcard dark yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/WordBee.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title yellow">
                <a href="#">Word Bee</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Create the meaningful words.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i id="IDMRCCLUB" className="fas fa-clock mr-2"></i>055
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* ---------------------- */}
      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            MRC CLUB
          </div>

          <article
            onClick={(e) => {
              navigate("/Sevent/061");
            }}
            className="postcard light blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/polaroidExposure.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <a href="#">Polaroid Exposure</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Click pictures related to in and out of Techvyom preparations.
                The best one will get the prize.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>061
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/062");
            }}
            className="postcard light red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/Pictograoh.jfif"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title red">
                <a href="#">Pictograph/Logograph Designing</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Make a handmade logo on the provided theme.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i id="IDPHARMQUIMICACLUB" className="fas fa-clock mr-2"></i>
                  062
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* =============== */}
      <section className="dark">
        <div className="container py-4">
          <h1 className="h1 text-center" id="pageHeaderTitle">
            PHARMQUIMICA CLUB
          </h1>
          <article
            onClick={(e) => {
              navigate("/Gevent/071");
            }}
            className="postcard dark blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/PharmaDesk.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">Pharma desk</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Present yourr formulations which were allotted under concerned
                faculty members.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>071
                </li>
              </ul>
            </div>
          </article>

          <article
            onClick={(e) => {
              navigate("/Gevent/072");
            }}
            className="postcard dark red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/collage-o-fact.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red">
                <a href="#">Collage-O-Fact</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Participants have to make the collage related to Pharmacy /
                Environmental Issues with the help of WASTE MATERIALS.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>072
                </li>
              </ul>
            </div>
          </article>

          <article
            onClick={(e) => {
              navigate("/Gevent/073");
            }}
            className="postcard dark blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/Pioneerdom.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">Pioneerdom</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Participants have to bring their own startup and business ideas
                in the form of the ppt.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>073
                </li>
              </ul>
            </div>
          </article>

          <article
            onClick={(e) => {
              navigate("/Sevent/074");
            }}
            className="postcard dark red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/Pharmasequisser.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red">
                <a href="#">Pharmesquisser</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Make a Pencil Sketch Painting on the theme provided at the spot.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single{" "}
                </li>
                <li className="tag__item">
                  <i id="IDDESIGNCLUB" className="fas fa-clock mr-2"></i>074
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* ---------------------- */}
      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            DESIGN CLUB
          </div>

          <article
            onClick={(e) => {
              navigate("/Sevent/081");
            }}
            className="postcard light blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/TechnicalPainting.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <a href="#">Technical Painting</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Create a painting on the given technical topic.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>081
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/082");
            }}
            className="postcard light red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/MultimediaArt.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title red">
                <a href="#">Multimedia Art</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Showcase your art skills on multimedia.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>082
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/083");
            }}
            className="postcard light green"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/BestOutOfWaste.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title green">
                <a href="#">Best Out of Waste</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Make best out of waste that must be useful and attractive.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>083
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/084");
            }}
            className="postcard light yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/QuillTheTechvyom.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title yellow">
                <a href="#">Quill The Techvyom</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Quilling is an art form that involves the use of strips of paper
                that are rolled, shaped, and glued together to create decorative
                designs. Participate in this event and showcase your talent.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i id="IDLANWAR" className="fas fa-clock mr-2"></i>084
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* =============== */}
      <section className="dark">
        <div className="container py-4">
          <h1 className="h1 text-center" id="pageHeaderTitle">
            LAN WAR
          </h1>
          <article
            onClick={(e) => {
              navigate("/Sevent/091");
            }}
            className="postcard dark blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/bgmi.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">BGMI</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Battlegrounds Mobile India (in short form BGMI, previously known
                as PUBG Mobile India) is the Indian version of PUBG Mobile,
                exclusively for players in India. Participate in this and show
                your gamilng skill.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>091
                </li>
              </ul>
            </div>
          </article>

          <article
            onClick={(e) => {
              navigate("/Sevent/092");
            }}
            className="postcard dark red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/fifa.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red">
                <a href="#">FIFA</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                One of the famous mobile game. Fan of football(soccer)? than
                this event is for you.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>092
                </li>
              </ul>
            </div>
          </article>

          <article
            onClick={(e) => {
              navigate("/Gevent/093");
            }}
            className="postcard dark blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/MiniMilitia.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">Mini-Militia</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Mini Militia combat an intense battle at the arena with the
                Doodle Army. Last one standing wins the game.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i id="IDOPENEVENTS" className="fas fa-clock mr-2"></i>093
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* =========== */}
      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            OPEN EVENTS
          </div>

          <article
            onClick={(e) => {
              navigate("/Sevent/101");
            }}
            className="postcard light blue"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/techGallery(medical).jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <a href="#">Tech Gallery-Medical</a>
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Join us for our Tech Gallery event! Techvyom will host a Tech
                Gallery where you will have the opportunity to showcase your
                innovative ideas related to pharmacy and environment.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>101
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/102");
            }}
            className="postcard light red"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/TechGallery(technicalEngineering).jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title red">
                <a href="#">Tech Gallery-Technical engineering</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Join us for our Tech Gallery event! Techvyom will host a Tech
                Gallery where you will have the opportunity to showcase your
                innovative ideas on technologies.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>102
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/103");
            }}
            className="postcard light green"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/TechQuiz.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title green">
                <a href="#">Tech Quiz</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Put your knowledge about all things technology to the test with
                our question of tech quiz and have some nerdy fun in the
                process. Good luck!
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>103
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/104");
            }}
            className="postcard light yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/PLCDesigning.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title yellow">
                <a href="#">PLC Designing</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                PLCs (programmable logic controllers) are found everywhere in
                industry today. Proper PLC system design can provide many years
                of service for a machine or process and greatly improve
                efficiency and profitability for the owner. You need to showcase
                your talents in designing PLC .
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>104
                </li>
              </ul>
            </div>
          </article>
          <article
            onClick={(e) => {
              navigate("/Sevent/105");
            }}
            className="postcard light yellow"
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="/images/3DPrinting.jpg"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title yellow">
                <a href="#">3D-Printing</a>
              </h1>

              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                3D printing or additive manufacturing is a process of making
                three dimensional solid objects from a digital file. The
                creation of a 3D printed object is achieved using additive
                processes.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>105
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Mycomp;
