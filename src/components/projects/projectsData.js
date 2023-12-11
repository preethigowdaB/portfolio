import webdesign from "../../assets/img/responsive web design.jpeg";
import crud_operations from "../../assets/img/crud operartions.jpeg";
import weather_forecast from "../../assets/img/weatherforecast.jpeg";
import UI_design from '../../assets/img/responsive_ui_design.png';
import QR_code from '../../assets/img/qr_code.jpeg.png';
import material_ui from '../../assets/img/material UI.jpeg';

let ProjectsData = [
  {
    id: 6,
    image: material_ui,
    title: "Social media UI design",
    technology_used: [
      {
        tech1: "HTML",
        tech2: "CSS",
        tech3: "Material Ui",
        tech4:"REACT JS"
      },
    ],
    github_link: "https://github.com/preethigowdaB/react_with_material_ui",
    description:
      " Responsive UI design using Material-UI involves creating user interfaces that adapt and look good on various screen sizes and devices. Material-UI is a popular React UI framework that follows the principles of Google's Material Design. ",
  },
  {
    id: 5,
    image: QR_code,
    title: "QR Code generator",
    technology_used: [
      {
        tech1: "HTML",
        tech2: "CSS",
        tech3: "BOOTSTRAP",
        tech4:"REACT JS"
      },
    ],
    github_link: "https://github.com/preethigowdaB/qr_code_generator",
    description:
      " The QR Code Generator project is a web application developed using React.js that allows users to create QR codes easily. QR codes are two-dimensional barcodes that store data and can be quickly scanned using a QR code reader or a smartphone camera. This project provides a user-friendly interface for generating QR codes with custom information.",
  },
  {
    id: 4,
    image: UI_design,
    title: "Responsive designs",
    technology_used: [
      {
        tech1: "HTML",
        tech2: "CSS",
        tech3: "BOOTSTRAP",
      },
    ],
    github_link: "https://github.com/preethigowdaB/responsive_web_designs",
    description:
      " I developed a responsive web design that fluidly adjusts to different screen sizes. This includes optimizing layout, typography, and interactive elements for both small and large screens.",
  },
  {
    id: 3,
    image: weather_forecast,
    title: "WeatherNaut",
    technology_used: [
      {
        tech1: "HTML",
        tech2: "CSS",
        tech3: "BOOTSTRAP",
        tech4: "REACT JS",
      },
    ],
    github_link: "https://github.com/preethigowdaB/weatheroNaut",
    description:
      "The primary goal of WeatherNaut is to create a user-centric nautical weather application that enhances the safety and enjoyment of maritime activities. The project emphasizes accuracy in weather data, intuitive design, and real-time updates to cater to the dynamic nature of nautical environments",
  },
  {
    id: 2,
    image: crud_operations,
    title: "CRUD operations",
    technology_used: [
      {
        tech1: "HTML",
        tech2: "CSS",
        tech3: "BOOTSTRAP",
        tech4: "REACT JS",
      },
    ],
    github_link: "https://github.com/preethigowdaB/CRUD_Operations",
    description:
      "The Comprehensive CRUD Operations Web Application is designed to provide users with a robust platform for managing a dynamic collection of items. The application facilitates Create, Read, Update, and Delete operations, empowering users to interact seamlessly with their data. From a user-friendly interface to advanced features like  responsiveness, this project aims to deliver a comprehensive solution for diverse data management needs.",
  },
  {
    id: 1,
    image: webdesign,
    title: "Responsive ui designs",
    technology_used: [
      {
        tech1: "HTML",
        tech2: "CSS",
        tech3: "BOOTSTRAP",
      },
    ],
    github_link: "https://github.com/preethigowdaB/responsive_ui_designs",
    description:
      " I developed a responsive web design that fluidly adjusts to different screen sizes. This includes optimizing layout, typography, and interactive elements for both small and large screens.",
  },
 
 


];

export default ProjectsData;
