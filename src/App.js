import React, {  useState } from "react";
import "./App.css";
import Nav from "./components/NavBar";
import Header from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const color = "teal";
  const [profileData] = useState({
    _id: "672bae13b6056d556f4454f4",
    name: "Prithviraj",
    linkedin: "https://www.linkedin.com/in/prithviraj-indulkar/",
    email: "prithvirajindulkar2003@gmail.com",
    github: "https://github.com/Prithviraj2003",
    twitter: "https://x.com/Prithviraj81646",
    role: "Full Stack Developer",
    shortDesc:
      "I am a Full Stack Developer with a passion for developing web applications. I am proficient in JavaScript, React, Node.js, Express, and MongoDB. I am always eager to learn new technologies and build innovative projects. I am currently looking for opportunities to work on challenging projects and expand my skill set.",
    about:
      "I'm Prithviraj Indulkar, a passionate and driven software developer dedicated to building software solutions that solve real-world problems. Currently based at Sanjay Ghodawat University, I bring a unique blend of technical expertise and creativity to every project I work on. My background spans across web development and DevOps, always with a focus on creating impactful and secure technology.With a strong foundation in engineering, I enjoy tackling complex challenges, transforming them into efficient, user-friendly systems. I thrive in dynamic, collaborative environments that promote innovation and continuous learning, and I'm always eager to explore new technologies to drive meaningful change.",
  });
  const [projectsData] = useState([
    {
      _id: "672baed7b6056d556f4454f8",
      name: "CollegeStoreHub",
      description:
        "CollegeStoreHub is a unified online platform that enables students to easily browse and purchase products and services from various stores on the college campus. Whether it's food items or printing services, students can access a wide range of offerings in one place. Each store manages its listings and payments through their own gateways. Although direct order cancellations aren't available on the platform, students can contact stores for cancellations and refunds. Recently, the platform was upgraded with a microservice architecture using RabbitMQ to improve server resilience, ensuring smooth operations and secure handling of web push notifications. Only essential user information such as name, phone number, email ID, and password is stored, prioritizing user privacy and data security.",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQFryUpXwmrMfg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723194734674?e=1733961600&v=beta&t=BKrwN0AWf4L9q_ldcnf6f2pmbAi89ecweiMb3yWORow",
      liveLink: "https://sgu.collegestorehub.com/",
      badges: ["React", "Node.js", "Express", "MongoDB", "RabbitMQ", "JWT"],
    },
    {
      _id: "672baefab6056d556f4454f9",
      name: "XypherShare",
      description:
        "XypherShare is a peer-to-peer file-sharing platform designed with a focus on privacy, security, and ease of use. It enables users to share files directly without size limitations, ensuring data is kept private through end-to-end encryption. XypherShare aims to minimize its environmental impact by reducing server dependencies and supporting decentralized sharing methods. This project emphasizes a user-friendly experience, allowing seamless file transfers while prioritizing data integrity and user confidentiality.",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQECdSufi7bXgw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723195129780?e=1733961600&v=beta&t=8MTSTaXfo-nWBiKJsLim7Jpr3BcS8tj5750PHIYlCGo",
      liveLink: "http://xyphershare.cloud/",
      repoLink: "https://github.com/Prithviraj2003/XypherShare-Frontend",
      badges: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "WebRTC",
        "Websockets",
        "p2p",
      ],
    },
    {
      _id: "672baf0db6056d556f4454fa",
      name: "pg-replicator",
      description:
        "pg-replicator is a versatile Docker image that simplifies PostgreSQL database replication by automating the replication process and supporting flexible configurations. It provides persistent data storage with Docker volumes and continuous monitoring for replication status.",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQE60svO8GF1vQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723195395652?e=1733961600&v=beta&t=ZqJx5yFlOYc8RevCYgcWOc7yRek-EXM-gvRt11h54Hs",
      liveLink:
        "https://hub.docker.com/repository/docker/prithvirajindulkar/pg-replicator",
      repoLink: "https://github.com/Prithviraj2003/pg-replicator",
      badges: ["Docker", "PostgreSQL", "Bash"],
    },
  ]);

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
