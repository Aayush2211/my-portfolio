import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { IoIosArrowDropup, IoIosArrowDropupCircle } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  // Scroll to Top
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 3100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Toast
  const showToastMessage = () => {
    toast.success("Email Sent Successfully!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  // EmailJs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x8athzw",
        "template_7x471x9",
        form.current,
        "CIXwIi0eRVRjViI8J"
      )
      .then(
        (result) => {
          console.log(result.text);
          showToastMessage();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="flex flex-col text-white items-center justify-center"
      id="contact"
    >
      <h1 className="contactPageTitle">Get In Touch</h1>
      <span
        className="contactDesc
      
      "
      >
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          className="msg"
          name="message"
          rows={5}
          placeholder="Your Message"
        ></textarea>
        <button className="submitBtn" type="submit" value="Send">
          Submit
        </button>
        <ToastContainer />
        <div className="footer flex flex-row">
          <div className="footerTagLine text-lg font-semibold">
            Made with ❤️ by Aayush Raj
          </div>
        </div>
      </form>
      <div className="scroll-to-top">
        {isVisible && (
          <div onClick={scrollToTop}>
            <IoIosArrowDropupCircle size={30} cursor="pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
