import React, { useEffect } from "react";
import "./Hero.css";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import user from "../../assets/user.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
  const { theme } = useTheme();
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <section className="hero_section">
      <div className="diagonal"></div>
      <div className="hero" data-aos="fade-up">
        <div className={`hero_img ${theme}`}>
          <img src={user} alt="user image" />
        </div>
        <div className="hero_texts" id={theme}>
          <div className="text">
            <h1>I'm Gideon Uzuigwe</h1>
            <span>Web Developer</span>
          </div>

          <p>
            I'm a Nigerian based web designer. I am based on both front‑end and
            back‑end designs. I am focused on crafting clean & user‑friendly
            experiences, I am passionate about building excellent software that
            improves the lives of those around me. Click on the <b>button</b> to
            know more about me.
          </p>
          <Link to="/about">
            <span>More About me</span>
            <span>
              <BsArrowRightShort />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;