import React from "react";
const HomePage = () => {
  return (
    <section id="home" className="container mb-5  ">
      <div className="row g-0 ">
        <div className="col-lg-6">
          <div className="mt-sm-5 pt-5 text-white">
            <h1 className="fs_45 fs_md_38 fs_sm_30 mt-5 ">Hello, </h1>
            <span className="fs_80 fs_lg_75 fs_md_59 fs_sm_45 fw_500">I'm <span className="text-warning fs_75 fs_md_59 fs_sm_45"> Preethi B</span> </span>
            <h1 className="fs_24 fs_sm_20 mb-sm-3 auto_typing">Front end developer.</h1>
            <p className="fs_sm_12 ">A frontend focused web developer building the frontend websites and web applications that leads to success of the overall product.</p>
          </div>
        </div>
        <div className="col-lg-6">
        </div>
      </div>
    </section>
  );
};

export default HomePage;
