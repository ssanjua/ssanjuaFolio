import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "ssanjua",
  name: "SSANJUA",
  title: "Full Stack developer",

  subTitle: emoji(
    "¡Hola! Soy Paula Pallares,Full Stack Developer con experiencia en mantenimiento de sitios y funcionalidades web, así como en el desarrollo de proyectos audiovisuales. Mi formación académica incluye un Bootcamp en Data Science donde adquirí habilidades en tratamiento de datos, bases de datos y machine learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ssanjua",
  linkedin: "https://www.linkedin.com/in/paupallares/",
  instagram: "https://www.instagram.com/ppupipallares",
  twitter: "https://www.instagram.com/ppupipallares",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "HABILIDADES TÉCNICAS",
  categories: [
    {
      subTitle: "Lenguajes",
      skills: [],
      softwareSkills: 
        [ /* https://fontawesome.com/icons?d=gallery */
        {
          skillName: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          skillName: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "python",
          fontAwesomeClassname: "fab fa-python"
        },
        {
          skillName: "sql",
          fontAwesomeClassname: "fas fa-database"
        },
      ],
    },
    {
      subTitle: "Frameworks",
      skills: [],
      softwareSkills: [
        {
          skillName: "react",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          skillName: "django",
          fontAwesomeClassname: "fab fa-python"
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "fab fa-node"
        }, 
        {
          skillName: "flask",
          fontAwesomeClassname: "fab fa-python"
        },  
      ]
    },
    {
      subTitle: "Tecnologías",
      skills: [],
      softwareSkills: [
        {
          skillName: "slack",
          fontAwesomeClassname: "fab fa-slack"
        },
        {
          skillName: "docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          skillName: "docker",
          fontAwesomeClassname: "fab fa-css3-alt"
        },      
      ]
    },
    {
      subTitle: "+ Software",
      skills: [],
      softwareSkills: [
        {
          skillName: "photoshop",
          fontAwesomeClassname: "fa-solid fa-python"
        },
        {
          skillName: "premiere pro",
          fontAwesomeClassname: "fab fa-css3-alt"
        },  
        {
          skillName: "illustrator",
          fontAwesomeClassname: "fab fa-css3-alt"
        },   
      
      ]
    },

  ],
  display: true 
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FreeCodeCamp",
      logo: require("./assets/images/freeCodeCamp.png"),
      subHeader: "FULL STACK WEB DEVELOPER",
      duration: "Junio 2023 - Marzo 2024",
      desc: "algo describimos aca",
      descBullets: [
        "JavaScript + React + Node.js",
      ],
      link: "www.algo.com"
    },
    {
      schoolName: "HardvardX",
      logo: require("./assets/images/harvardX.png"),
      subHeader: "CS50 COMPUTER SCIENCE",
      duration: "Enero 2023 - Diciembre 2023",
      desc: "Curso completo atraves de edX",
      descBullets: ["Python + Computer Skills + Eso"],
      link: "www.algo.com"
    },
    {
      schoolName: "Coursera",
      logo: require("./assets/images/coursera.png"),
      subHeader: "IBM Data Engineering",
      duration: "Julio 2023 - Diciembre 2023",
      desc: "Curso completo atraves de Coursera",
      descBullets: ["Python + Computer Skills + Eso"],
      link: "www.algo.com"
    },
    {
      schoolName: "SoyHenry",
      logo: require("./assets/images/soyHenry.png"),
      subHeader: "DATA SCIENCE",
      duration: "Febrero 2023 - Julio 2023",
      desc: "Bootcamp + 800hs.",
      descBullets: ["Python + analisis de datos"],
      link: "www.algo.com"
    },
    {
      schoolName: "Universidad de Buenos Aires",
      logo: require("./assets/images/uba.png"),
      subHeader: "DISEÑO DE IMAGEN Y SONIDO",
      duration: "Marzo 2012 - Diciembre 2018",
      desc: "Carrera universitaria, Soft skills",
      descBullets: ["Todo muy groso"],
      link: "www.algo.com"
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true 
};

// PROYECTOS

const bigProjects = {
  title: "PROYECTOS",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/freeCodeCamp.png"),
      projectName: "AI RECOMENDACION",
      projectDesc: "Proyecto de data science bla vla nasndajnda adna",
      footerLink: [
        {
          name: "WEBSITE",
          url: "http://nextu.se/"
        },
        {
          name: "CÓDIGO",
          url: " "
        }
      ],
    },
    {
      image: require("./assets/images/url-shortener_preview.png"),
      projectName: "SHORT URL",
      projectDesc: "Convierte URLs largas en versiones más cortas y manejables",
      footerLink: [
        {
          name: "WEBSITE",
          url: "shortener://nextu.se/"
        },
        {
          name: "REPOSITORIO",
          url: "https://github.com/ssanjua/url-shortener"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "REPRODUCTOR MUSICA",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "WEBSITE",
          url: "http://nextu.se/"
        },
        {
          name: "CÓDIGO",
          url: " "
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("CONTACTO ☎️"),
  subtitle:
    "Tengo unas ganas de que me llames recluter, ven a mi.",
  number: "+5492644466720",
  email_address: "ppaupallares@gmail.com"
};

// TWITTER

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};
