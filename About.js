import React from "react";
import "./about.css";
import linellImg from "./linell.png";
import aubreyImg from "./aubrey.png";
import aldrinImg from "./aldrin.jpg";
import lydImg from "./lyd.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-contents">
      <div className="about-header">
        <h1 className="about-h1">
          ABOUT <span className="yellow">US!</span> - WildMerch
        </h1>
      </div>

      <div className="about-body">
        <p className="about-text">
          Welcome to{" "}
          <Link to={`/`} className="homeLink">
            wildmerch.com
          </Link>{" "}
          – your central hub for official merchandise from university-affiliated
          organizations. Explore a curated collection of high-quality apparel,
          accessories, and memorabilia, showcasing the diverse and vibrant
          spirit of campus life. Simplify your shopping while supporting your
          favorite groups. Celebrate unity and pride with exclusive items
          available only at wildmerch.com
          <br />
          <br />
          Join us in embracing the essence of our university community in every
          purchase.
        </p>
      </div>

      <div className="about-members">
        <h1 className="team-title">
          Meet Our <span className="yellow">Team</span>:
        </h1>

        <div className="members-section">
          <div className="members-container1">
            <img
              src={linellImg}
              alt="Linell Thea Ponce"
              className="founder-img1"
            />
            <h3 className="founder">Linell Thea Ponce</h3>
            <p className="position">
              <span className="whitey">Position:</span> Chief Executive Officer
            </p>
          </div>
          <div className="members-container1">
            <img
              src={aubreyImg}
              alt="Aubrey Jane K. Araña"
              className="founder-img2"
            />
            <h3 className="founder">Aubrey Jane K. Araña</h3>
            <p className="position">
              <span className="whitey">Position:</span> Chief Financial Officer
            </p>
          </div>
          <div className="members-container1">
            <img
              src={aldrinImg}
              alt="Aldrin R. Mangubat"
              className="founder-img3"
            />
            <h3 className="founder">Aldrin R. Mangubat</h3>
            <p className="position">
              <span className="whitey">Position:</span> Chief Operations Officer
            </p>
          </div>
          <div className="members-container1">
            <img
              src={lydImg}
              alt="Lyd Andre Torniado"
              className="founder-img4"
            />
            <h3 className="founder">Lyd Andre Torniado</h3>
            <p className="position">
              <span className="whitey">Position:</span> Chief Technical Officer
            </p>
          </div>
        </div>

        <p className="team-information">
          <h3>Our Mission:</h3>
          <br />
          To empower businesses, big and small, with a powerful online presence.
          We strive to make <span className="yellow brand">WildMerch</span>{" "}
          accessible to all, providing the tools and technology needed to
          succeed in the ever-evolving digital landscape.
        </p>
      </div>
    </div>
  );
}

export default About;
