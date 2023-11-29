import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from '../assets/img/logo.png'
const NavigationBar = () => {
  const [menu, setMenu] = useState('home')

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-lg ">
            <img src={logo} alt="logo" height={40}/>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto fs_18">
              <li className="nav-item"  >
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`nav-link mx-lg-3 ${menu==='home'? 'text-warning' :'text-white'}`}
                  onClick={()=>setMenu('home')}
                >
                  Home{menu==='home'? <hr/> : <></>}
                </Link>
              </li>
              <li className="nav-item" >
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`nav-link mx-lg-3 ${menu==='about'? 'text-warning' :'text-white'}`}
                  onClick={()=>setMenu('about')}
                >
                  About{menu==='about'?<hr/>:<></>}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`nav-link mx-lg-3 ${menu==='project'? 'text-warning' :'text-white'}`}
                  onClick={()=>setMenu('project')}
                >
                  Projects{menu==='project'?<hr/>:<></>}
                </Link>
              </li>

              <li className="nav-item" >
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`nav-link mx-lg-3  border rounded px-3 ${menu==='contact'? 'border border-warning text-warning': 'text-white'}`}
                  onClick={()=>setMenu('contact')}
                >
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
