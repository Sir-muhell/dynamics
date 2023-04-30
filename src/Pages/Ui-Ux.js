import React from "react";
import Projects from "../Components/Projets";
import Img from "../Assets/Img/image14.png";
import Img1 from "../Assets/Img/image12.png";
import Img2 from "../Assets/Img/image13.png";
import More from "../Components/More";
import ConnectBox from "../Components/ConnectBox";
import Tools from "../Components/Tools";
export default function UIUX() {
  return (
    <>
      <Projects />
      <section className="lg:p-20 lg:pt-10 p-10 lg:grid md:grid grid-cols-3 gap-20 bg-primary pro-img">
        <a href="https://theprincedynamic.notion.site/Time-logos-and-Brand-Identity-Designs-c7fba9b5006f436bb50177104af717c6">
          <img src={Img} alt="" />
        </a>
        <a href="https://princedynamic.com">
          <img src={Img1} alt="" />
        </a>
        <a href="https://theprincedynamic.notion.site/Time-logos-and-Brand-Identity-Designs-c7fba9b5006f436bb50177104af717c6">
          <img src={Img2} alt="" />
        </a>
      </section>
      <More />
      <Tools />
      <ConnectBox />
    </>
  );
}
