import React from "react";
import "./Projects.css";
import { FaReact} from "react-icons/fa";
import { IoServer } from "react-icons/io5";
import {
  SiHtml5,
  SiCss3,
  SiHeroku,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/Yogeshvari2902/Project-Images/blob/main/Lenskart.jpg?raw=true"
                  alt="Lenskart"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Lenskart Replica</h2>
              <p>
              Lenskart is an Indian eyewear online portal where user can buy glasses, contact lenses & sunglasses.
              Designed all the features & functionalities for the front end of the website to enhance the user experience. 
              It's a team project completed executed in 5 days.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <SiCss3/>
                <IoLogoJavascript />
                <SiChakraui/>
              </div>
              <div>
                <a
                  href="https://lenskart-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Vikasyadav3935/Lenskart-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/Yogeshvari2902/Project-Images/blob/main/Tic_Tac_Toe.jpg?raw=true"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Classic TicTacToe</h2>
              <p>
                Mini project of A classic TicTacToe game built using ReactJS. Features : Button for Clear The Game, show an alert for winner(0/X), etc.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://curious-vacherin-02672a.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Yogeshvari2902/React-Tic-Tac-Toe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/Yogeshvari2902/Project-Images/blob/main/Amazon.png?raw=true"
                  alt="Amazon"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Amazon Clone</h2>
              <p>
              Amazon is a famous e-commerce website where users can buy electronics, clothes, books, toys, games etc. Main functionalities were : User can Register/Login, Sorting, Filtering, Add to Cart and many more. 
              </p>
              <div>
                <IoLogoJavascript />
                <SiHtml5 />
                <SiCss3 />
                <IoServer />
                <SiHeroku />
              </div>
              <div>
                <a
                  href="https://constweek2-amazon.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Agramom/Amazon_constweek2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/Yogeshvari2902/Project-Images/blob/main/ESPN.png?raw=true"
                  alt="ESPN"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>ESPNcricinfo Clone</h2>
              <p>
                ESPNcricinfo is a website which gives the details of cricket sport like cricket matches throughout the world.
                Fixed the structure & design of the web page for mobile devices.
                A collaborative project completed in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://startling-puppy-d2fbee.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/MohitIndoriya/ESPNsports"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
