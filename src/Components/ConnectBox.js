import React from "react";
import File from "../Assets/CV - PRINCEDYNAMIC.pdf";
export default function ConnectBox() {
  return (
    <>
      <section className="bg-primary p-10 lg:p-20 lg:pl-40 lg:pr-40">
        <div className="bg-secondary brand-card p-10 lg:p-20 grid lg:grid-cols-2">
          <p className="text-white connect-text ">Want to hire me?</p>
          <div className="grid lg:grid-cols-7 grid-cols-2 gap-4 lg:mt-0 mt-10">
            <a
              href="mailto:opeoluwaonafadeji@gmail.com"
              style={{ borderRadius: "17px" }}
              className="text-center lg:col-span-3 bg-tertiary hover:bg-secondary hover:border hover:border-tertiary hover:text-tertiary text-white py-5 px-7 rounded"
            >
              <button>Email Me!</button>
            </a>
            <a
              href={File}
              download="CV - PRINCEDYNAMIC.pdf"
              style={{ borderRadius: "17px" }}
              className="text-center lg:col-span-3 lg:col-span-3 bg-secondary border border-tertiary hover:bg-tertiary hover:text-secondary text-white py-5 px-7 rounded"
            >
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
