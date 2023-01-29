import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://avatars.githubusercontent.com/u/111362569?s=400&u=4b7ed72f49cefd9e0eed14c2e38b561a160aa304&v=4"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Yogeshvari Surywanshi </span> from{" "}
                <span className="different"> Indore, Madhya Pradesh</span>. I have
                completed my graduation in Bachelor of Technology from Lakshmi Narain college of 
                Technology Indore. An aspiring full-stack web
                  developer is skilled in developing
                  scalable user interfaces to improve
                  user satisfaction. Highly skilled at
                  coordinating with cross-functional
                  teams to brainstorm mock-ups.

              </h4>
              <h4>
                Some of my interests apart form Coding :
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Facts{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cooking{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
