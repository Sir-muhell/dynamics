import React from "react";
import Experience from "../Components/Experience";
import ConnectBox from "../Components/ConnectBox";
import Img1 from "../Assets/Img/image1.svg";
import Img9 from "../Assets/Img/image2.svg";
import SkillBar from "react-skillbars";
const skills = [
  { type: "Creative Thinking", level: 90 },
  // { type: "Creative Art Direction", level: 85 },
  // { type: "Brand Identity Design", level: 95 },
  // { type: "Brand Strategy & Positioning", level: 80 },
  // { type: "Product Design", level: 85 },
];

const colors = {
  bar: "#6d6d6d",
  title: {
    text: "#fff",
    background: "#000000",
  },
};

export default function Resume() {
  return (
    <>
      <section className="bg-primary lg:p-20 p-10">
        <div className="lg:grid grid-cols-5">
          <div className="lg:text-left col-span-2   ">
            <div className="relative">
              <img src={Img1} className="water-mark mt-20" alt="" />
              <p className="absolute resume-header text-white">My Resume</p>
              <p className="relative resume-head-sub text-white">
                My Education & Work Experience
              </p>
            </div>
            <div>
              <p className="resume-text text-tertiary mt-5 ">
                I’m a professional brand identity and UIUX Designer. I help
                create strong identity for New and already existing brands I do
                this by understanding what the brand offers and stand for.
                Thereby using this perceived values to attract new clients and
                keep existing ones more comfortable using good brand visuals. I
                also create good UIUX.
              </p>
            </div>
            <div className="pt-10 resume-btn">
              <button
                class="col-span-3 bg-tertiary hover:bg-secondary hover:border hover:border-tertiary hover:text-tertiary text-white py-5 px-7 rounded"
                style={{ borderRadius: "17px" }}
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <img src={Img9} alt="Prince dynamics" className="hero" />
          </div>
        </div>
      </section>
      <Experience text=" Work Experience" />
      <section className="bg-secondary lg:p-20 lg:pb p-10">
        <p className="experience text-white">Educational Background.</p>
        <div className="mt-10 lg:grid md:grid grid-cols-2 gap-4 mt-16">
          <div className="lg:grid md:grid grid-cols-10">
            <div className="col-span-1">
              <p className="text-white ex-head lg:block hidden ">2015</p>
              <p className="text-white ex-head lg:block hidden">2020</p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-8 text-white">
              <p className="act">B.Sc Fisheries & Aquatic Biology.</p>
              <p className="location">
                Lagos state University. Lagos Nigeria.
                <span className="lg:hidden"> | 2015 - 2020</span>
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-white ex-head lg:block hidden">2009</p>
              <p className="text-white ex-head lg:block hidden">2014</p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-8 text-white">
              <p className="act">Secondary School Certificate.</p>
              <p className="location">
                Veeky and Veeky International School, Lagos, Nigeria
                <span className="lg:hidden"> | 2009 - 2014 </span>
              </p>
            </div>
          </div>
          <div className="lg:grid md:grid grid-cols-10">
            <p className="text-white ex-head col-span-1 lg:block hidden">
              2022
            </p>
            <div className="col-span-1"></div>
            <div className="col-span-8 text-white">
              <p className="act">
                Brand Management: Aligning Business, Brand and Behaviour
              </p>
              <p className="location">
                University of London.
                <span className="lg:hidden"> | 2009 - 2014 </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary lg:p-20 p-10">
        <p className="experience text-white">Voluntary Experiences</p>
        <div className="mt-10 lg:grid md:grid grid-cols-2 gap-4 mt-16">
          <div className="lg:grid md:grid grid-cols-10">
            <div className="col-span-1">
              <p className="text-white ex-head lg:block hidden">2022</p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-8 text-white">
              <p className="act">Member, National Media Team.</p>
              <p className="location">
                Foursquare Gospel Church in Nigeria.
                <span className="lg:hidden"> | 2022 </span>
              </p>
            </div>
          </div>
          <div className="lg:grid md:grid grid-cols-10">
            <div className="col-span-1">
              <p className="text-white ex-head lg:block hidden">2015</p>
              <p className="text-white ex-head lg:block hidden">2020</p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-8 text-white">
              <p className="act">Media Head & Public Relation Officer.</p>
              <p className="location">
                Foursquare Campus Fellowship, Lagos State University Chapter
                <span className="lg:hidden"> | 2015 - 2020 </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary lg:p-20 p-10">
        <p className="experience text-white">My Skillset</p>
        <div className="pt-10 grid">
          <SkillBar skills={skills} height={45} colors={colors} />
        </div>
      </section>
      <ConnectBox />
    </>
  );
}
