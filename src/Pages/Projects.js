import React from "react";
import Projects from "../Components/Projets";
import Img from "../Assets/Img/image9.png";
import Img1 from "../Assets/Img/image10.png";
import Img2 from "../Assets/Img/image11.png";
import Img3 from "../Assets/Img/image12.png";
import Img4 from "../Assets/Img/image13.png";
import Img5 from "../Assets/Img/image14.png";
import More from "../Components/More";
import ConnectBox from "../Components/ConnectBox";
import Tools from "../Components/Tools";
export default function Project() {
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
        <a href="https://theprincedynamic.notion.site/Time-logos-and-Brand-Identity-Designs-c7fba9b5006f436bb50177104af717c6">
          <img src={Img3} alt="" />
        </a>
        <a href="https://princedynamic.com">
          <img src={Img4} alt="" />
        </a>
        <a href="https://theprincedynamic.notion.site/Time-logos-and-Brand-Identity-Designs-c7fba9b5006f436bb50177104af717c6">
          <img src={Img5} alt="" />
        </a>
      </section>
      <More />
      <Tools />
      <ConnectBox />
    </>
  );
}
