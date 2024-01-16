import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="mt-4">
      <div className="text-white text-center container">
        <span className="fs_35 fw_500 fs_sm_25  color_green slideBottom">About Me</span>
        <div className="row g-0 mb-4">
          <div className="col-lg-3 "></div>
          <div className="col-lg-6 ">
            <p className="fs_sm_14 slideLeft">
              <span className="fs_25">👋</span> Hello, I'm Preethi, a dedicated
              front-end developer passionate about creating immersive and
              seamless digital experiences.
            </p>
          </div>
          <div className="col-lg-3 "></div>
        </div>
        <span className="fs_35 fw_500 fs_sm_25  color_green slideBottom ">What I Do</span>
        <div className="row g-0 mb-4">
          <div className="col-lg-3 "></div>
          <div className="col-lg-6 ">
            <p className="fs_sm_14 slideLeft">
              <span className="fs_25">💻</span> I specialize in crafting
              responsive and user-friendly interfaces using technologies like
              HTML, CSS, and JavaScript. Good knowledge in popular libraries and
              frameworks such as Bootstrap, React js, I thrive on transforming design
              concepts into functional and elegant solutions.
            </p>
          </div>
          <div className="col-lg-3 "></div>
        </div>
        <span className="fs_35 fw_500 fs_sm_25  color_green slideBottom">Let's Connect</span>
        <div className="row g-0">
          <div className="col-lg-3 "></div>
          <div className="col-lg-6 ">
            <p className="fs_sm_14 slideLeft">
              <span className="fs_25">📬</span> I'm always open to new
              opportunities. Whether you're looking for a front end developer to
              join your team, need assistance with a project, feel free to reach
              out. Let's create something amazing together!.
            </p>
            <div className="my-sm-4 mt-2">
              <a
                href="https://github.com/preethigowdaB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={45} color="white " />
              </a>

              <a
                href="https://www.linkedin.com/in/preethi-b-880920203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={45} className="color_blue mx-4" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
