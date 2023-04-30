import React from "react";
import Img2 from "../Assets/Img/xoxa.svg";
import Img3 from "../Assets/Img/startrack.svg";
import Img4 from "../Assets/Img/ae.svg";
import Img5 from "../Assets/Img/boxup.svg";
import Img6 from "../Assets/Img/image4.svg";
import Img7 from "../Assets/Img/image6.svg";
import Img8 from "../Assets/Img/image3.svg";
import ConnectBox from "../Components/ConnectBox";
import Experience from "../Components/Experience";
import Hero from "../Components/Hero";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
export default function Home() {
  return (
    <>
      <Hero
        head="I create timeless brand identities for businesses."
        subHead1=" Welcome to my personal website. My name is"
        span="Princedynamic"
        subHead2="and I am a professional brand designer with years of experience
        in creating unique and memorable brands for companies of all
        sizes."
      />
      <section className="bg-primary p-10 lg:p-20">
        <div className="line pt-10">
          <img src={Img2} className="line" alt="xoxa" />
          <img src={Img3} className="line" alt="" />
          <img src={Img4} className="line" alt="" />
          <img src={Img5} className="line" alt="" />
        </div>
      </section>
      <section className="bg-primary lg:p-20 p-10 pt-10">
        <div className="lg:grid grid-cols-11 relative ">
          <div className="col-span-5">
            <img src={Img7} className="water-marks " alt="" />
            <img src={Img6} className="absolute brand " alt="" />
          </div>
          <div className="vertical-line lg:block hidden col-span-1"></div>
          <div className="col-span-5 bg-primary">
            <div className="p-10 brand-card brand-cards">
              <img src={Img8} className="mt-12" alt="identity" />
              <p className="brand-head text-white mt-10">
                Brand Identity Design.
              </p>
              <p className="text-tertiary brand-text mt-10">
                I specialize in creating unique and powerful brand identities
                for companies of all sizes. I understand the importance of a
                strong brand and works closely with each client to develop a
                cohesive visual and messaging strategy that accurately
                represents their business and resonates with their target
                audience.
              </p>
              <div className="grid lg:grid-cols-7 grid-cols-2 gap-4 mt-10">
                <Link
                  to="./contact "
                  style={{ borderRadius: "17px" }}
                  className="text-center lg:col-span-3 bg-tertiary hover:bg-secondary hover:border hover:border-tertiary hover:text-tertiary text-white py-5 px-7 rounded"
                >
                  <button className="">Get Started</button>
                </Link>
                <Link
                  style={{ borderRadius: "17px" }}
                  to="./project "
                  className="lg:col-span-3 text-center bg-secondary border border-tertiary hover:bg-tertiary hover:text-secondary text-white py-5 px-7 rounded"
                >
                  <button className=" ">View Project</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary home-ex">
        <Experience text=" My Experience and Professional skills." />
      </section>

      <ConnectBox />
    </>
  );
}
