import React, { useState, useRef } from "react";
import ConnectBox from "../Components/ConnectBox";
import { FiPhone } from "react-icons/fi";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Hero from "../Components/Hero";
import emailjs from "@emailjs/browser";
export default function UIUX() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fuvjqxx",
        "template_qhy032u",
        form.current,
        "wWZowEtxntEG0fnFJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Hero
        head="Do you want me
        to work on your
        next project?"
        subHead="Lets discuss your design project."
        subHead1="Reach out to me via any of the following means, so we can get to discuss your next branding or UIUX design project. "
      />
      <section className="lg:p-20 lg:pt-10 p-10 bg-primary">
        <div className="lg:grid grid-cols-2 gap-10">
          <div>
            <p className="contact-text text-white">Connect with me!</p>
            <p className="sub-contact text-white mt-10">
              You can reach out to me via my personal or business line, or any
              other means you are most comfortable with.
            </p>
            <div className="contact-links mt-10 text-white">
              <div className="lg:grid grid-cols-10">
                <AiOutlineMail className="col-span-1 icon" />
                <div className="col-span-1"></div>
                <p
                  className="col-span-7 text-center lg:text-left"
                  mailto="opeoluwaonafadeji@gmail.com"
                >
                  <a href="mailto:opeoluwaonafadeji@gmail.com">
                    opeoluwaonafadeji@gmail.com
                  </a>
                </p>
              </div>
              <div className="lg:grid grid-cols-10 mt-10 ">
                <FiPhone className="col-span-1 icon" />
                <div className="col-span-1"></div>
                <p className="col-span-8 lg:text-left text-center">
                  <a href="tel:+234 902 454 0688">+234 902 454 0688 </a>
                  <a href="tel:+234 703 064 7319 " className="lg:block hidden">
                    +234 703 064 7319
                  </a>
                </p>
                <p className="col-span-8 lg:hidden text-center">
                  <a href="tel:+234 902 454 0688" className="hidden">
                    +234 902 454 0688
                  </a>
                  <a href="tel:+234 703 064 7319 " className="">
                    +234 703 064 7319
                  </a>
                </p>
              </div>
              <div className="lg:grid grid-cols-10 mt-10">
                <MdOutlinePersonPinCircle className="col-span-1 icon" />
                <div className="col-span-1"></div>
                <p className="col-span-7 lg:text-left text-center">
                  Lekki Phase 1, Lekki, Lagos Nigeria.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white lg:text-left text-center lg:pl-16 pt-14 lg:pb-0 pb-5">
              Send me a mail:
            </p>
            <div className="mt-10 form-box">
              <form ref={form} onSubmit={sendEmail} className="form">
                <input type="text" placeholder="Your Name" name="user_name" />

                <input
                  type="text"
                  placeholder="Email Address"
                  name="user_email"
                />

                <textarea
                  placeholder="Message"
                  rows="3"
                  name="user_message"
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ConnectBox />
    </>
  );
}
