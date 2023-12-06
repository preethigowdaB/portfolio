import webdesign from "../../assets/img/responsive web design.jpeg";
import crud_operations from "../../assets/img/crud operartions.jpeg";
import weather_forecast from "../../assets/img/weatherforecast.jpeg";
import UI_design from '../../assets/img/responsive_ui_design.png';
import QR_code from '../../assets/img/qr_code.jpeg.png'
let ProjectsData = [
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
    id: 4,
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
];

export default ProjectsData;
