import React from "react";
import Projects from "../Components/Projets";
import Img from "../Assets/Img/image9.png";
import Img1 from "../Assets/Img/image10.png";
import Img2 from "../Assets/Img/image11.png";
import More from "../Components/More";
import ConnectBox from "../Components/ConnectBox";
import Tools from "../Components/Tools";
export default function UIUX() {
  return (
    <>
      <Projects />
      <section className="lg:p-20 p-10 lg:grid grid-cols-3 gap-20 bg-primary pro-img">
        <a href="https://www.behance.net/gallery/157285659/XOXA-Brand-Identity">
          <img src={Img} alt="" />
        </a>
        <a href="https://www.behance.net/gallery/157735491/PRINCEDYNAMIC-IDENTITY">
          <img src={Img1} alt="" />
        </a>
        <a href="https://www.behance.net/gallery/160716031/STARTRACK-BRAND-IDENTITY">
          <img src={Img2} alt="" />
        </a>
      </section>
      <More />
      <Tools />
      <ConnectBox />
    </>
  );
}
