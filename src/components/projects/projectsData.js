import webdesign from "../../assets/img/responsive web design.jpeg";
import crud_operations from "../../assets/img/crud operartions.jpeg";
import weather_forecast from "../../assets/img/weatherforecast.jpeg";
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
];

export default ProjectsData;
