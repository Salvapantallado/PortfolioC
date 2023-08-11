"use client";
import { useState } from "react";
import "../styles/project.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function Projects() {
  const mockProjects = [
    {
      title: "PROJECT NUMBER 1",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://google.com",
    },
    {
      title: "PROJECT NUMBER 2",
      image:
        "https://images.unsplash.com/photo-1594335034276-470bb3d7ceac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://google.com",
    },
    {
      title: "PROJECT NUMBER 3",
      image:
        "https://images.unsplash.com/photo-1521572115275-e3becac251db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://google.com",
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  function ClassCheck(index) {
    if (activeProjectIndex > index + 1 || activeProjectIndex < index - 1) {
      return "projectCard notShown";
    } else if (index === activeProjectIndex) {
      return "projectCard";
    } else if (index < activeProjectIndex) {
      return "projectCard leftFromActive";
    } else if (index > activeProjectIndex) {
      return "projectCard rightFromActive";
    }
  }
  function DescriptionClassCheck(index) {
    if (index === activeProjectIndex) {
      return "Show";
    } 
    if (index < activeProjectIndex || index > activeProjectIndex) {
      return "notShown";
    }
    return
  }

  function checkOnClick(index) {
    if (index === activeProjectIndex) {
      return null;
    }
    if (index < activeProjectIndex) {
      activeProjectIndex - 1 >= 0
        ? setActiveProjectIndex(activeProjectIndex - 1)
        : setActiveProjectIndex(mockProjects.length - 1);
    }
    if (index > activeProjectIndex) {
      activeProjectIndex + 1 <= mockProjects.length - 1
        ? setActiveProjectIndex(activeProjectIndex + 1)
        : setActiveProjectIndex(0);
    }
  }

  return (
    <>
    <div id="projects" className="projects">
    <NavBar/>
        <Footer/>
      <div className="projectCarousel">
        {mockProjects.map((items, index) => (
            <div className={ClassCheck(index)} key={index}>
              <div className="imageSpace" />
              <div className="projectImage" onClick={() => checkOnClick(index)}>
                <img src={items.image} alt="" />
              </div>

              <div className={DescriptionClassCheck(index)}>
                <div className="projectTitle">
                  <h1>{items.title}</h1>
                </div>
                <div className="projectDescription">
                  <p>{items.description}</p>
                </div>
                <a className="projectButton" href={items.link} target="_blank" rel="noopener noreferrer">
                  VIEW PROJECT
                </a>
              </div>
            </div>
        ))}
      </div>
    </div>
    </>
  );
}
