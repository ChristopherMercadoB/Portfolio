import tienda from "../assets/landing.png";
import biblioteca from "../assets/b1b.png";
import portfolio from "../assets/portfolio.png";
import gestor from "../assets/GestorPaciente.png";
import tictac from '../assets/ttt.png'
import restaurant from "../assets/restaurant.jpg";
import socialNetwork from '../assets/socialNet.png'
import jobby from '../assets/busqueda-empleo.jpg'
const proyectos = [
  {
    id: 1,
    name: "Tienda",
    URL: "https://christophermercadob.github.io/",
    github:
      "https://github.com/ChristopherMercadoB/ChristopherMercadoB.github.io",
    description: "Landing pages de un e-commerce con html y css",
    area: "frontend",
    img: tienda,
    tecnologies: ["HTML", "CSS"],
  },
  {
    id: 2,
    name: "Portfolio",
    URL: "#inicio",
    github: "https://github.com/ChristopherMercadoB/Portfolio",
    description: "Portfolio personal",
    area: "frontend",
    img: portfolio,
    tecnologies: ["React", "Bootstrap", "CSS"],
  },
  {
    id: 3,
    name: "TIC-TAC-TOE",
    URL: null,
    github: "https://github.com/ChristopherMercadoB/Tic-tac-toe",
    description: "Recreacion del juego tic-tac-toe con react y bootstrap",
    area: "frontend",
    img: tictac,
    tecnologies: ["React", "Bootstrap"],
  },
  {
    id: 4,
    name: "B1B",
    URL: "https://b1bliotech.000webhostapp.com/index.php",
    github:
      "https://github.com/ChristopherMercadoB/Biblioteca/tree/main/biblioteca",
    description: "Biblioteca con php, leyendo los libros desde una base de datos",
    area: "frontend",
    img: biblioteca,
    tecnologies: ["PHP", "Mysql", "Bootstrap"],
  },
  {
    id: 5,
    name: "Red social",
    URL: null,
    github: "https://github.com/ChristopherMercadoB/SocialNetwork",
    description: `Esta mini red social está desarrollada con ASP.NET MVC y Bootstrap, permitiendo a los usuarios interactuar de manera dinámica y moderna. La plataforma ofrece funcionalidades clave para compartir y conectar con amigos a través de publicaciones de videos, fotos y comentarios.`,
    area: "backend",
    img: socialNetwork,
    tecnologies: ["Asp.Net", "Sqlserver", "Bootstrap"],
  },
  {
    id: 6,
    name: "Api para restaurant",
    URL: null,
    github: "https://github.com/ChristopherMercadoB/ApiRestaurant",
    description: `Esta API para restaurantes está desarrollada con .NET y proporciona un sistema robusto para gestionar platos, órdenes, mesas e ingredientes. Cuenta con manejo de roles y seguridad mediante tokens JWT (JSON Web Tokens).`,
    area: "backend",
    img: restaurant,
    tecnologies: ["Asp.Net", "JWT", "EntityFramework", "Sqlserver", "Api"],
  },
  {
    id: 7,
    name: "Jobby",
    URL: null,
    github: "https://github.com/ChristopherMercadoB/Jobby",
    description: `Esta es una aplicación de búsqueda de empleo desarrollada en ASP.NET, que utiliza una arquitectura de aplicación web y una API web para proporcionar una plataforma robusta y fácil de usar tanto para buscadores de empleo como para empleadores.`,
    area: "backend",
    img: jobby,
    tecnologies: [
      "Asp.Net",
      "JWT",
      "Razorpages",
      "Api",
      "EntityFramework",
      "CSS",
    ],
  },
  {
    id: 8,
    name: "Gestor de pacientes",
    URL: null,
    github: "https://github.com/ChristopherMercadoB/GestorPaciente",
    description: `
Gestor de Pacientes es una aplicación web desarrollada con ASP.NET MVC y Bootstrap para gestionar eficientemente la información de los pacientes en clínicas y hospitales. Ofrece funcionalidades como registro y actualización de datos de pacientes, gestión de consultas médicas, búsqueda y filtrado, todo en una interfaz moderna y responsiva.
        `,
    area: "backend",
    img: gestor,
    tecnologies: ["Asp.Net", "Razorpages", "Bootstrap"],
  },
];

export default proyectos;
