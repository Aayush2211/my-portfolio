import React from "react";
import Typical from "react-typical";
import "./About.css";
const About = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details-name my-2">
          <span className="primary-text">
            Hello👋, I'm <span className="highlighted-text">Aayush</span>
          </span>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>

        <div className="profile-details">
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {/* I am a */}
                <Typical
                  loop={Infinity}
                  steps={[
                    1000,
                    "I am into Software Development - Web",
                    2500,
                    "I am into Mentoring",
                    2500,
                    "I am into Problem Solving",
                    2500,
                    "Solved 450+ problems on Leetcode",
                    2500,
                  ]}
                />
              </h1>
            </span>
            {/* <span className="profile-role-tagline">
              An aspiring software developer with knack of building web <br />
              applications using MERN Stack <br />
              and solving problems using different algorithms and data
              structures.
            </span> */}
          </div>
        </div>
        <div className="colz">
          <div className="colz-icon">
            <a
              className="logo-socials-linkedin"
              href="https://www.linkedin.com/in/aayush-raj-3309581b5/"
            ></a>
            <a
              className="logo-socials-github"
              href="https://github.com/Aayush2211"
            ></a>
            <a
              className="logo-socials-leetcode"
              href="https://leetcode.com/aayush_raj_22/"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
