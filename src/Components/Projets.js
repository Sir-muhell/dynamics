import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Projects() {
  const [btnState, setBtnState] = useState(false);
  const [btnColor1, setBtnColor1] = useState("#6D6D6D");

  function handleClick() {
    // toggle isActive state on click
    btnColor1 === "#6D6D6D"
      ? setBtnColor1("#ffffff !important")
      : setBtnColor1("#6D6D6D");
    // setBtnColor1((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? "pro-active" : "";
  return (
    <>
      <section className="bg-primary lg:p-20 p-10">
        <div>
          <p className="back-text lg:block hidden ">
            My Most Recent Design Projects
          </p>
          <p className="project-head text-white pt-20 ">
            My Most Recent Design Projects
          </p>
          <div className="grid lg:grid-cols-5 text-white pt-10">
            <p className="col-span-2 project-head-sub">
              Brand Identies & UIUX Projects
            </p>
            <p className="col-span-2 project-text">
              Here is a show of some of the most recent brand identities and
              UIUX design projects i worked on. Kindly note that some
              informations may be hidden from you due to NDA and other legal
              backings.
            </p>
          </div>

          <div className="grid lg:grid-cols-6 grid-cols-3 pt-10 gap-10 ">
            <Link to="../project">
              <button
                className="pro-btn"
                onClick={() => handleClick()}
                style={{ borderRadius: "17px", color: btnColor1 }}
              >
                All Projects
              </button>
            </Link>
            <Link to="../brand">
              <button
                className={`pro-btn${toggleClassCheck}`}
                onClick={handleClick}
                style={{ borderRadius: "17px" }}
              >
                Brand Identity
              </button>
            </Link>
            <Link to="../ui-ux">
              <button
                className={`pro-btn${toggleClassCheck}`}
                onClick={handleClick}
                style={{ borderRadius: "17px" }}
              >
                UI/UX Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
