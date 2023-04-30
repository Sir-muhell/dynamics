import React from "react";
export default function Experience({ text }) {
  return (
    <>
      <section className="bg-secondary lg:p-20 p-10">
        <div>
          <p className="experience text-white">{text}</p>
          <p className="sub-experience text-white mt-5">
            Here are some of the organizations I have worked for and currently
            work for as well as some of the skillset implored.
          </p>
        </div>

        <div className="mt-10 lg:grid md:grid grid-cols-2 gap-4 mt-16">
          <div className="lg:grid md:grid grid-cols-10">
            <p className="text-white ex-head col-span-1 lg:block hidden">
              2022
            </p>
            <div className="col-span-1"></div>
            <div className="col-span-7 text-white">
              <p className="act">Brand Designer</p>
              <p className="location">
                Apex Network <span className="lg:hidden">| 2022</span>
              </p>
              <div>
                <div className="description">
                  <p className="mr-2">1.</p>
                  <p>
                    Create high-end graphics visual content for social media
                    engagements and ad campaigns.
                  </p>
                </div>
                <div className="description">
                  <p className="mr-2">2.</p>
                  <p>
                    Ensure consistency in brand’s design elements across all
                    marketing and social media platform.
                  </p>
                </div>
                <div className="description">
                  <p className="mr-2">3.</p>
                  <p>
                    Organize and develop creative contents for social media
                    customer retainment and engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:grid md:grid grid-cols-10 lg:mt-0 mt-10">
            <p className="text-white ex-head col-span-1 lg:block hidden">
              2022
            </p>
            <div className="col-span-1"></div>
            <div className="col-span-7 text-white">
              <p className="act">Lead Designer - Convocation Ceremonies</p>
              <p className="location">
                Lagos State University, CIPPR unit
                <span className="lg:hidden"> | 2022</span>
              </p>
              <div>
                <div className="description">
                  <p className="mr-2">1.</p>
                  <p className="desc-item">
                    Coordinated every convocation design campaign projects.
                  </p>
                </div>
                <div className="description">
                  <p className="mr-2">2.</p>
                  <p className="desc-item">
                    Led marketing campaigns for the brand on social media.
                  </p>
                </div>
                <div className="description">
                  <p className="mr-2">3.</p>
                  <p className="desc-item">
                    Created engaging and compelling contents and designs for
                    social media.
                  </p>
                </div>
                <div className="description">
                  <p className="mr-2">4.</p>
                  <p className="desc-item">
                    Oversaw and coordinated every design year in and out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
