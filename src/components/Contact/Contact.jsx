import React, { useEffect } from "react";
import "./Contact.css";
import { IoMdMailUnread } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const Contact = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "Gideon - Get In Touch With Me";
  }, []);
  return (
    <div className="container">
      <div className="contact_info">
        <div className={`contact_text ${theme}`}>
          <h3>Don't be shy!</h3>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact_img_text">
            <span className="icon">
              <IoMdMailUnread />
            </span>
            <div>
              <span>MAIL ME</span>
              <span>Uzuigwegideon@gmail.com</span>
            </div>
          </div>
          <div className="contact_img_text">
            <span className="icon">
              <FaSquarePhone />
            </span>
            <div>
              <span>CALL ME</span>
              <span>+234 906 015 1115</span>
            </div>
          </div>
          <div className="socials">
            <div>
              <a href="https://www.linkedin.com/in/gideon-uzuigwe-2a740b259/">
                <FaLinkedinIn />
              </a>
            </div>
            <div>
              <a href="">
                <FaFacebookF />
              </a>
            </div>
            <div>
              <a href="">
                <FaTwitter />
              </a>
            </div>
            <div>
              <a href="https://github.com/GideonUzuigwe">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className={`contact_form ${theme}`}>
          <form>
            <div>
              <input type="text" name="name" placeholder="YOUR NAME" />
              <input type="email" name="email" placeholder="YOUR EMAIL" />
              <input type="text" name="subject" placeholder="YOUR SUBJECT" />
            </div>

            <textarea rows={8} placeholder="YOUR MESSAGE"></textarea>
            <button className={`btn ${theme} lg`}>
              <span>Submit</span>
              <span></span>
              <span className="btn_icon">
                <BsFillSendFill />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
