import React from "react";
import Img1 from "../Assets/Img/image1.svg";
import Img9 from "../Assets/Img/image2.svg";
import File from "../Assets/CV - PRINCEDYNAMIC.pdf";

export default function Hero({ head, subHead1, span, subHead2, subHead }) {
  return (
    <>
      <section className="bg-primary lg:p-20 p-10">
        <div className="lg:grid grid-cols-5">
          <div className="lg:text-left col-span-2   ">
            <div className="relative">
              <img src={Img1} className="water-mark mt-20" alt="" />
              <p className="absolute hero-header text-white">{head}</p>
              <p className="relative hero-head-sub text-white">{subHead}</p>
            </div>
            <div>
              <p className="hero-text text-tertiary mt-5 ">
                {subHead1}
                <span className="text-white"> {span} </span>
                {subHead2}
              </p>
            </div>
            <div className="pt-10 hero-btn">
              <a
                href={File}
                download="CV - PRINCEDYNAMIC.pdf"
                class="col-span-3 bg-tertiary hover:bg-secondary hover:border hover:border-tertiary hover:text-tertiary text-white py-5 px-7 rounded"
                style={{ borderRadius: "17px" }}
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="col-span-3">
            <img src={Img9} alt="Prince dynamics" className="hero" />
          </div>
        </div>
      </section>
    </>
  );
}
