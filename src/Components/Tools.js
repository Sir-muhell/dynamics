import React from "react";
import Img1 from "../Assets/Img/image15.png";
import Img2 from "../Assets/Img/image16.png";
import Img3 from "../Assets/Img/image17.png";
import Img4 from "../Assets/Img/image18.png";
import Img5 from "../Assets/Img/image19.png";

export default function Tools() {
  return (
    <>
      <section className="lg:p-20 lg:pt-10 p-10 bg-primary">
        <p className="tools-text text-white">Design tools used:</p>
        <div className="lg:grid md:grid grid-cols-10">
          <div className="col-span-6">
            <div className="grid grid-cols-5 gap-4 mt-10">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
              <img src={Img4} alt="" />
              <img src={Img5} alt="" />
            </div>
          </div>

          <hr
            color="white"
            className="horizon-tool lg:block md:block hidden col-span-4"
          />
        </div>
      </section>
    </>
  );
}
