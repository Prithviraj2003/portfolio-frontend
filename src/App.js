import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/NavBar";
import Header from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "teal";
  const [profileData, setProfileData] = useState();
  console.log(profileData);
  const [projectsData, setProjectsData] = useState([]);
  console.log(process.env.REACT_APP_SERVER_URL);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const prof = await fetch(
        `${
          process.env.REACT_APP_SERVER_URL
            ? process.env.REACT_APP_SERVER_URL
            : "http://localhost:8888"
        }/api/profile`
      );
      setProfileData(await prof.json());
      const projects = await fetch(
        `${
          process.env.REACT_APP_SERVER_URL
            ? process.env.REACT_APP_SERVER_URL
            : "http://localhost:8888"
        }/api/projects`
      );
      setProjectsData(await projects.json());
      setLoading(false);
    };
    getData();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Nav color={color} />
      <Header profile={profileData} color={color} />
      <About about={profileData?.about} color={color} />
      <Projects projects={projectsData} color={color} />
      <Contact profile={profileData} color={color} />
      <Footer />
    </>
  );
}

export default App;
