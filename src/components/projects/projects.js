import React, { useState } from "react";
import ProjectsData from "./projectsData";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const itemsPerPage = 3; // Set the number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalProjects = ProjectsData.length;
  const totalPages = Math.ceil(totalProjects / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = ProjectsData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-5 text-white" id="project">
      <h2 className="color_green">Projects :</h2>
      <div>
        {currentProjects.map((item, index) => (
                      <div
                        key={index}
                        className="d_flex"
                        style={{
                          flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                          marginBottom: "20px",
                        }}
                      >
                        <div style={{ flex: "1", marginRight: "10px" }} className="mt-3">
                          <div class="card" style={{ width: "90%", height: "auto" }}>
                            <img
                              src={item?.image}
                              className="card-img-top text-center"
                              alt="responsive ui design"
                              height={200}
                            />
                            <div class="card-body bg-white pb-3">
                              <h5 class="card-title py-2 ms-2 text-dark">{item?.title}</h5>
                              {item?.technology_used?.map((items) => (
                                <>
                                  <span className="border  rounded-5 fs_12 py-1 px-lg-1 mx-1 text-dark">
                                    {items?.tech1}
                                  </span>
                                  <span className="border  rounded-5 fs_12 py-1 px-lg-1 mx-1 text-dark">
                                    {items?.tech2}
                                  </span>
                                  <span className="border  rounded-5 fs_12 py-1 px-lg-1 mx-1 text-dark">
                                    {items?.tech3}
                                  </span>
                                  <span className="border  rounded-5 fs_12 py-1 px-lg-1 mx-1 text-dark">
                                    {items?.tech4}
                                  </span>
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div style={{ flex: "1.5" }}>
                          <h3 className="ps-1 mt-md-5 mt-3 ">{item?.title}</h3>
                          <p className="ps-1 pe-4 ps-md-0 fs_14 my-3 fs_sm_12">{item.description}</p>
                          <div className="my-4 py-2">
                            <a
                              href={item?.github_link}
                              className="text-white px-md-4 px-3 py-2 border-0 bg-warning rounded fs_14 "
                              style={{ textDecoration: "none" }}
                            >
                           <span>  <FaGithub size={15} color="white " /></span>   Github Link
                            </a>
                          </div>
                        </div>
                      </div>
        ))}
      </div>
      <div className="pagination mt-3 d-flex justify-content-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`btn ${currentPage === index + 1 ? "btn-primary" : "btn-secondary"} mx-2`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;

