import React from "react";
import "./Mycomp.css";
import { useNavigate } from "react-router-dom";

const Mycomp = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1 style={{ color: "black" }}>Events </h1>
      <section className="dark">
        <div className="container py-4">
          <h1 className="h1 text-center" id="pageHeaderTitle">
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play green">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                For all the techies as well as soccer fans out there, having
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* {============} */}
      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            SYNERGY CLUB
          </div>

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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                In this event, the robots have to move the blocks of wood from
                one position (start) to the other position (stop) in water.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play green">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                  <i className="fas fa-clock mr-2"></i>.
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The Machinist is an event of planning, creativity, imagination
                & innovation. A platform is provided to make your knowledge
                usable in a practical or technical working mechanism. With your
                knowledge of the working of any motion make a model to show the
                transmission of motion and win this event
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Participants will design and build a Glider Plane made of
                Balsawood, which will be launched by using a hand. The goal of
                the contest is to keep the glider aloft for the longest period
                of time. Rules:-
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play green">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The 3D creation is an event of making 3d model in solid works
                of the given design.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Participants has to find a programming mistake or error in the
                given block of code
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Participants has to write a code /query for the schema(tables)
                provided RULES:
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play green">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Participants has to perform Programming in c
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Participants are required to perform a play on given problem.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>.
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Chain Reaction is a sequence of reactions where a reactive
                product causes additional reactions to take place. In a Chain
                Reaction positive feedback leads to a self- amplifying chain of
                events.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The Machinist is an event of planning, creativity, imagination
                & innovation. A platform is provided to make your knowledge
                usable in a practical or technical working mechanism. With your
                knowledge of the working of any motion make a model to show the
                transmission of motion and win this event
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Participants will design and build a Glider Plane made of
                Balsawood, which will be launched by using a hand. The goal of
                the contest is to keep the glider aloft for the longest period
                of time. Rules:-
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play green">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The 3D creation is an event of making 3d model in solid works
                of the given design.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The 3D creation is an event of making 3d model in solid works
                of the given design.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The better you control your drone, better you make choices,
                better chances to compete your opponent. Construct a drone which
                can reach the destination while flying through hurdles and sharp
                turns etc.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                In this event, the robots have to move the blocks of wood from
                one position (start) to the other position (stop) in water.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The Machinist is an event of planning, creativity, imagination
                & innovation. A platform is provided to make your knowledge
                usable in a practical or technical working mechanism. With your
                knowledge of the working of any motion make a model to show the
                transmission of motion and win this event
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Grouped
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The Machinist is an event of planning, creativity, imagination
                & innovation. A platform is provided to make your knowledge
                usable in a practical or technical working mechanism. With your
                knowledge of the working of any motion make a model to show the
                transmission of motion and win this event
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The better you control your drone, better you make choices,
                better chances to compete your opponent. Construct a drone which
                can reach the destination while flying through hurdles and sharp
                turns etc.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                In this event, the robots have to move the blocks of wood from
                one position (start) to the other position (stop) in water.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play green">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Drag and Place is one of the most exciting synergy event. you
                just have to drag the obstacle and place it in their required
                places. the arena will be revealed during thecompetition.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Chain Reaction is a sequence of reactions where a reactive
                product causes additional reactions to take place. In a Chain
                Reaction positive feedback leads to a self- amplifying chain of
                events.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The Machinist is an event of planning, creativity, imagination
                & innovation. A platform is provided to make your knowledge
                usable in a practical or technical working mechanism. With your
                knowledge of the working of any motion make a model to show the
                transmission of motion and win this event
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                The better you control your drone, better you make choices,
                better chances to compete your opponent. Construct a drone which
                can reach the destination while flying through hurdles and sharp
                turns etc.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                In this event, the robots have to move the blocks of wood from
                one position (start) to the other position (stop) in water.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play green">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Drag and Place is one of the most exciting synergy event. you
                just have to drag the obstacle and place it in their required
                places. the arena will be revealed during thecompetition.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
                Drag and Place is one of the most exciting synergy event. you
                just have to drag the obstacle and place it in their required
                places. the arena will be revealed during thecompetition.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Single
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
                  </a>
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
