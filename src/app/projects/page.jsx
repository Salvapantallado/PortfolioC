"use client";
import { useState } from "react";
import "../styles/project.css";
import "animate.css";
import { useSwipeable } from "react-swipeable";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import PeithoIMG from "./images/PeithoIMG.png";
import pokeAppv2 from "./images/pokeAppv2.png";
import Flixflix from "./images/Flixflix.png";
import FFOOGLE from "./images/FFOOGLE.png";
import CrazyPirates from "./images/CrazyPirates.png";
import WeatherApp from "./images/WeatherApp.png";
import loginapp from "./images/loginapp.png";
import Portfolio from "./images/Portfolio.png";
import Image from "next/image";

export default function Projects() {
  const mockProjects = [
    {
      title: "Peitho",
      image: PeithoIMG,
      description:
      "Clothing catalog made in React with a PostgreSQL database. It has a 'favorite item' system, cloth filters, 'cart', admin panel for the whole page management, products, stories, images, etc.",
        // "Catalogo de ropa hecho en React con base de datos en PostrgreSQL. Posee sistema de favoritos, filtros por tipo de ropa, 'carrito', panel de admin para manejar precios, productos, historias, imágenes, etc.",
      link: "https://peitho-frontend.vercel.app",
      language: ["React", "NodeJS", "PostgreSQL", "Express"],
    },
    {
      title: "Pokemon App",
      image: pokeAppv2,
      description:
        "Pokemon wikipedia-like made in PERN stack that combines the storage of pokemons brought from an external API inside the PostgreSQL database of the project with made-up pokemons which can be created by the user through CRUD methods. It has searchbar, filters, details by ID and pokemon creation",
        // "Especie de wiki Pokémon hecha en PERN stack que combina el alojamiento de pokemones almacenados en una api externa dentro de la base de datos propia de PostgreSQL junto con pokemones creados por el usuario mediante operaciones CRUD. Posee searchbar, filtros, detalles por id y creación de pokemones originales.",
      link: "https://poke-app-v2.vercel.app",
      language: ["React", "NodeJS", "PostgreSQL", "Express"],
    },
    {
      title: "Flixflix",
      image: Flixflix,
      description:
        "Landing placeholder similar to a streaming site of movies/series with the posibility of adding movies along with their image, which is shown in a dropdown on the right side of the site under the tag 'My movies'.",
        // "Plantilla de landing al estilo streaming de peliculas/series con la posibilidad de agregar una película junto con su imágen, la cuál se muestra en un dropdown del lado derecho bajo la etiqueta de 'My movies'.",
      link: "https://flix-project.vercel.app",
      language: ["React"],
    },
    {
      title: "FFOOGLE",
      image: FFOOGLE,
      description:
        "Search site for characters, monsters and games of the Final Fantasy videogame saga.",
        // "Página de búsquedas de personajes, monstruos y juegos de la saga Final Fantasy.",
      link: "https://ffoogle.vercel.app",
      language: ["React"],
    },
    {
      title: "Crazy Pirates NFT's",
      image: CrazyPirates,
      description:
        "NFT's selling site 'Crazy Pirates'. The ones can be(or could) found stored in the https://opensea.io site. All of which, through a Blockchain contract, could be acquired and designated to the corresponding virtual wallet of the owners for their use and disposition. This website accepted various virtual wallets as a pay method (Solflare, Ethereum, Sollet, Slope, Metamask) integrated in a Log-in inside the navbar of the site. (website out of service by its owner).",
        // "Página de venta de NFT's de 'Crazy Pirates'. Los mismos se encuentran (encontraban) alojados en la página https://opensea.io, en la cuál mediante un contrato de Blockchain, los NFT's comprados se asignaban a las billeteras virtuales de los dueños para su uso y disposición. Esta página web aceptaba varias billeteras virtuales como método de pago (Solflare, Ethereum, Sollet, Slope, Metamask) integradas en un LogIn dentro de la navbar de la misma. (Fuera de uso por parte del empleador)",
      link: "https://crazy-pirates.vercel.app",
      language: ["NextJS", "Blockchain", "TailwindCSS"],
    },
    {
      title: "Weather App",
      image: WeatherApp,
      description:
        "Website centered in GET petitions to the Rest Api http://openweathermap.org/.",
        // "Sitio web centrado en peticiones GET a la Rest Api de http://openweathermap.org/.",
      link: "http://lm-weather-project.vercel.app/",
      language: ["React"],
    },
    {
      title: "LogIn Landing",
      image: loginapp,
      description:
        "Realization of a landing page based in an image as part of a technical challenge.",
        // "Realización de una Landing page en base a una imágen como parte de un challenge técnico.",
      link: "https://loginapp-mu.vercel.app",
      language: ["React"],
    },
    {
      title: "Portfolio",
      image: Portfolio,
      description:
        "This portfolio, made in NEXTJS for storing an sharing my projects in a simpler way.",
        // "Este mismo portfolio, cuyo uso es almacenar mis proyectos y mostrarlos de una manera más dinámica.",
      link: "https://lighuenm-portfolio.vercel.app",
      language: ["NextJS"],
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  function ClassCheck(index) {
    if (activeProjectIndex > index + 1 || activeProjectIndex < index - 1) {
      return "projectCard notShown";
    } else if (index === activeProjectIndex) {
      return "projectCard activePC";
    } else if (index < activeProjectIndex) {
      return "projectCard leftFromActive ";
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
    return;
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

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      activeProjectIndex >= 0 && activeProjectIndex < mockProjects.length - 1
        ? setActiveProjectIndex(activeProjectIndex + 1)
        : null,
    onSwipedRight: () =>
      activeProjectIndex !== 0
        ? setActiveProjectIndex(activeProjectIndex - 1)
        : null,
  });

  return (
    <>
      <div id="projects" className="projects">
        <NavBar />
        <Footer />
        <div className="projectCarousel" {...handlers}>
          {mockProjects.map((items, index) => (
            <div className={ClassCheck(index)} key={index}>
              <div className="imageSpace" />
              <div className="projectImage" onClick={() => checkOnClick(index)}>
                <Image src={items.image} alt="" />
              </div>

              <div className={DescriptionClassCheck(index)}>
                <div className="projectTitle">
                  <h1>{items.title}</h1>
                </div>
                <div className="projectDescription">
                  <p>{items.description}</p>
                </div>
                <div className="buttonStacksContainer">
                  {items.language?.map((stack, index) => (
                    <div className="buttonStacks" key={index}>
                      <h3>{stack}</h3>
                    </div>
                  ))}
                </div>
                <a
                  className="projectButton"
                  href={items.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
