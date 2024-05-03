import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import { FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import TextLoop from "react-text-loop";
import Typist from "react-typist";

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: "✏️",
    hideWhenDone: true,
  };

  const [darkmode, setdarkmode] = useState(false);

  return (
    <div>
      <div className={`card ${darkmode ? "dark" : ""}`}>
        <div
          className="toggle-btn"
          onClick={() => setdarkmode(!darkmode)}
        ></div>
        <div className="dark-mode"></div>
        <div className="card_body">
          <div className="profile text-center ">
            <img src="/fadly febro.png" className="avatar" alt="avatar" />
            <div className="bg_content rd_12 p_8">
              <h1>Fadly febro</h1>
              <p className="mt-16">Programming | Desainer</p>
              <Typist cursor={config_cursor}>
                HELLO GUYS, MY NAME IS FADLY FEBRO
              </Typist>
            </div>
          </div>
          <div className="container">
            <div className="mt-16">
              <a
                className="btn_action bg_content"
                href="https://www.instagram.com/fdlyfbro_/"
              >
              <BsInstagram>
              </BsInstagram>
              </a>
            </div>
            <div className="mt-16">
              <a
                className="btn_action bg_content"
                href="https://tiktok.com/@fdlyfbro3"
              >
              <FaTiktok>
                </FaTiktok>
              </a>
            </div>
            <div className="mt-16">
              <a
                className="btn_action bg_content"
                href="https://www.youtube.com/@fadlyfebro4019"
              >
              <FiYoutube>
                </FiYoutube>
              </a>
            </div>
            <div className="mt-16">
              <a
                className="btn_action bg_content"
                href="https://buymeacoffee.com/fadlyfebroz"
              >
              <img src="BuyMeACoffe.png" alt="Saweria" className="icon" />
              </a>
            </div>
            <div className="mt-16">
              <a
                className="btn_action bg_content"
                href="https://github.com/fadlyfebros"
              >
              <FaGithub>
              </FaGithub>
              </a>
            </div>
            <div className="mt-16">
              <a
                className="btn_action bg_content"
                href="https://www.linkedin.com/in/fadly-febro-519273204/"
              >
              <FaLinkedin>
              </FaLinkedin>
              </a>
            </div>
            <div className="mt-16">
              <a
                className="btn_action bg_content"
                href="https://saweria.co/fadlyfebro"
              >
                <img src="Saweria.ico" alt="Saweria" className="icon" />
              </a>
            </div>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://portofolioku-mauve.vercel.app/"
            >
              <span>Personal web gen 1</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://fadly-febro-official-web.vercel.app/"
            >
              <span>Personal web gen 2</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://fadly-store.vercel.app/"
            >
              <span>Top Up Game</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="circle" bg={true} />
    </div>
  );
}

export default App;
