import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { IoMdMailUnread } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import axios from "axios";

const Contact = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "Gideon - Get In Touch With Me";
  }, []);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const submitBtn = useRef(null);

  async function submitFormDetails(e) {
    let prevText = submitBtn.current.innerHTML;
    submitBtn.current.innerHTML = "Sending...";
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://krwlyok762fgnx47pv3yx4qldm0habbp.lambda-url.eu-north-1.on.aws/send-mail",
        {
          email,
          subject,
          message,
        }
      );
      console.log(res.data);
      submitBtn.current.innerHTML = prevText;
    } catch (err) {
      submitBtn.current.innerHTML = "Not Sent...";
      setTimeout(() => {
        submitBtn.current.innerHTML = prevText;
      }, 3000);
    }
  }

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
              <a href="https://github.com/GideonUzuigwe">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className={`contact_form ${theme}`}>
          <form onSubmit={submitFormDetails}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                required
              />
            </div>

            <textarea
              rows={8}
              name="message"
              placeholder="YOUR MESSAGE"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            ></textarea>
            <button className={`btn ${theme} lg`} ref={submitBtn}>
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
