import React from "react";
import html_logo from "../assets/icons/html logo.jpeg";
import css_logo from "../assets/icons/css logo.jpeg";
import  bootstrap_logo from "../assets/icons/bootstrap-logo.png";
import js_logo from "../assets/icons/js logo .jpeg";
import react_logo from "../assets/icons/react.png";
import redux_logo from "../assets/icons/redux logo .jpeg";
import mi_logo from "../assets/icons/material ui logo.png";
import responsive_logo from '../assets/icons/responsive-web-design-icon.jpeg'
const Skills = () => {
  const Skills_data = [
    {
      id: 1,
      logo: html_logo,
      skill: "HTML",
    },
    {
      id: 2,
      logo: css_logo,
      skill: "CSS",
    },
    {
      id: 3,
      logo: bootstrap_logo,
      skill: "Bootstrap",
    },
    {
      id: 4,
      logo:responsive_logo,
      skill: "Responsive Ui design",
    },
    {
      id: 5,
      logo: js_logo,
      skill: "Javascript",
    },
    {
      id: 6,
      logo: react_logo,
      skill: "React js",
    },
    {
      id: 7,
      logo: mi_logo,
      skill: "Material Ui",
    },
    {
      id: 8,
      logo: redux_logo,
      skill: "Redux",
    },
  ];
  return (
    <div className="container mt-md-5 mt-3">
        <span className="fs_35 fw_500 fs_sm_25 color_green ">Skills :</span>
      <div className="row g-0">
        {Skills_data?.map((item) => (
          <>
            <div
              className="col-md-4 col-sm-6 my-3 d-flex justify-content-center ms-5 ms-sm-0"
              style={{ maxWidth: "15rem" }}
            >
              <div>
                <img src={item?.logo} height={120} width={120} className="mx-5"/>
                <h6 className="fs_22 fs_sm_14 fw_400 text-white text-center mt-2">
                  {item?.skill}
                </h6>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skills;
