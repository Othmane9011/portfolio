import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import springbooticon from "../../assets/icons/springicon.svg";
import dockericon from "../../assets/icons/dockericon.svg";
import giticon from "../../assets/icons/giticon.svg";
import javaicon from "../../assets/icons/javaicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import sqlicon from "../../assets/icons/sqlicon.svg";
import ecom from "../../assets/img/home-screenshot.webp";
import inventoryaiMockup from "../../assets/img/inventoryaiMockup.webp";
import monitoringSystemImage from "../../assets/img/monitoringSystemImage.webp";
import profilepicture from "../img/me2.webp";
import codeicon from "../../assets/icons/codeicon.svg";
import exploreicon from "../../assets/icons/explore.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import gameicon from "../../assets/icons/gameicon.svg";
import awsicon from "../../assets/icons/awsicon.svg";
import raspberrypiicon from "../../assets/icons/raspberryicon.svg";
import auth0icon from "../../assets/icons/auth0icon.svg";
import openaiicon from "../../assets/icons/openaiicon.svg";
import ioticon from "../../assets/icons/ioticon.svg";
import esp32Icon from "../../assets/icons/esp32icon.svg";
import grafanaIcon from "../../assets/icons/grafanaicon.svg";
import influxdbIcon from "../../assets/icons/influxdbicon.svg";
import mqttIcon from "../../assets/icons/MqttIcon.svg";
import pythonIcon from "../../assets/icons/pythonicon.svg";
import dht22Icon from "../../assets/icons/dht22icon.svg";
import fetchicon from "../../assets/icons/fetchicon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    fr: "Salut, Je suis Othmane",
    en: "Hi, I'm Othmane",
  },
  subtitle: "Developer ",
  description: {
    fr: "Développeur, j'ai pour objectif de faire progresser ma carrière et de participer à des projets inspirants. Je vous présente ici mon travail et ma passion pour le développement. Ensemble, construisons des solutions numériques et façonnons l'avenir numérique !",
    en: "A developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for development. Let's build a digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        fr: "Contactez moi",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        fr: "Mes projets",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "E-Commerce",
    description:
      "Site e-commerce dédié à la vente de composants informatiques. Intégration d’un système multi-vendeurs permettant à plusieurs marchands de proposer leurs produits. Gestion des commandes, paiements sécurisés et inventaires en temps réel. Interface moderne et responsive avec suivi client et tableau de bord vendeur.",
    description_EN:
      "E-commerce website dedicated to the sale of computer components. Integration of a multi-vendor system allowing multiple sellers to offer their products. Management of orders, secure payments, and real-time inventory tracking. Modern and responsive interface with customer tracking and vendor dashboard.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
    ],
    image: ecom,
    githuburl: "https://github.com/Othmane9011/E_Commerce_Website/tree/main",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
  title: "InventoryAI",
  description:
    "Une application de gestion d’inventaire avec IA, construite avec Spring Boot et React. J’ai développé l’API backend en Java (Spring Boot) et intégré le frontend avec React pour offrir une interface simple et performante. Le projet utilise également Docker pour l’orchestration et Auth0 pour la sécurité.",
  description_EN:
    "An AI-powered inventory management application built with Spring Boot and React. I developed the backend API in Java (Spring Boot) and integrated the frontend with React to provide a simple and efficient interface. The project also leverages Docker for orchestration and Auth0 for security.",
  technologies: [
    { name: "Java", icon: javaicon },
    { name: "Spring Boot", icon: springbooticon },
    { name: "React", icon: reacticon },
    { name: "Docker", icon: dockericon },
    { name: "MongoDB", icon: mongodbicon },
    { name: "Auth0", icon: auth0icon },
    { name: "OpenAI API", icon: openaiicon },
    { name: "Axios", icon: axiosicon },
    { name: "Git", icon: giticon },
    { name: "Figma", icon: figmaicon },
  ],
  image: inventoryaiMockup,
  githuburl:
    "https://github.com/Othmane9011/Web_Mobile_APP_Inventory_Management_Ai",
  githubicon: FiGithub,
  deploymenticon: FiLink,
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
    projectcolor: "#D1E8FF",
  },
},
  {
    title: "Hangar Sensor",
    description:
      "Système de surveillance pour hangar avicole utilisant un Raspberry Pi comme point d'accès Wi-Fi centralisant les données des capteurs répartis dans le hangar. Mesure en temps réel de paramètres environnementaux essentiels tels que la température, l'humidité, la luminosité et la qualité de l'air.",
    description_EN:
      "Monitoring system for poultry barn using a Raspberry Pi as a Wi-Fi access point centralizing data from sensors distributed throughout the barn. Real-time measurement of environmental parameters such as temperature, humidity, light, and air quality.",
    technologies: [
      { name: "Raspberry Pi", icon: raspberrypiicon },
      { name: "ESP32", icon: esp32Icon },
      { name: "Grafana", icon: grafanaIcon },
      { name: "InfluxDB", icon: influxdbIcon },
      { name: "MQTT", icon: mqttIcon },
      { name: "Python", icon: pythonIcon },
      { name: "DHT22", icon: dht22Icon },
    ],
    image: monitoringSystemImage,
    githuburl: "https://github.com/Othmane9011/Hangar_Sensor_Raspberry_Plug_and_play-",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#4CAF50",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    fr: "Voici Mon Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Development",
    skills: [
      { title: "HTML", hash: "#HTML", icon: htmlicon, color: "#990cf7ff" },
      { title: "CSS", hash: "#CSS", icon: cssicon, color: "#1572B6" },
      { title: "JavaScript", hash: "#JavaScript", icon: javascripticon, color: "#f7df1e" },
      { title: "React", hash: "#React", icon: reacticon, color: "#61DAFB" },
      { title: "Vue.js", hash: "#Vue.js", icon: vuejsicon, color: "#4FC08D" },
      { title: "TailwindCSS", hash: "#TailwindCSS", icon: tailwindcssicon, color: "#38B2AC" },
      { title: "MongoDB", hash: "#MongoDB", icon: mongodbicon, color: "#449C45" },
      { title: "OpenAI API", hash: "#OpenAI", icon: openaiicon, color: "#412991" },
      { title: "Auth0", hash: "#Auth0", icon: auth0icon, color: "#eb5424" },
      { title: "Raspberry Pi", hash: "#RaspberryPi", icon: raspberrypiicon, color: "#C51A4A" },
      { title: "IoT Sensors", hash: "#IoT", icon: ioticon, color: "#0082FC" },
      { title: "Node.js", hash: "#Node.js", icon: nodejsicon, color: "#339933" },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Backend",
    skills: [
      { title: "REST API", hash: "#RESTAPI", icon: apiicon, color: "#FF6F61" },
      { title: "JWT & Bcrypt", hash: "#JWT", icon: jwticon, color: "#000000" },
      { title: "SQL / PostgreSQL", hash: "#SQL", icon: sqlicon, color: "#336791" },
      { title: "Docker", hash: "#Docker", icon: dockericon, color: "#2496ED" },
      { title: "Spring Boot", hash: "#SpringBoot", icon: springbooticon, color: "#6DB33F" },
      { title: "Fetch API", hash: "#FetchAPI", icon: fetchicon, color: "#00BFFF" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "DevOps Deployment",
    skills: [
      { title: "Render", hash: "#Render", icon: rendericon, color: "#000000" },
      { title: "Netlify", hash: "#Netlify", icon: netlifyicon, color: "#00C7B7" },
      { title: "AWS", hash: "#AWS", icon: awsicon, color: "#FF9900" },
    ],
  },
] as const;

export const navLinks = [
  { fr: "Home", en: "Home", hash: "#home", icon: GoHome },
  { fr: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { fr: "Projets", en: "Projects", hash: "#projects", icon: GoProject },
  { fr: "A propos", en: "About me", hash: "#about-me", icon: GoPerson },
  { fr: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { fr: "imprimer", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { fr: "Confidentialité", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:myemail@com",
  text: "bengharbi12@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/othmane-bengharbi-05248324b",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Othmane9011",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:myemail@com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    fr: '"L’échec est simplement l’opportunité de recommencer, cette fois de façon plus intelligente."',
    en: `"Failure is simply the opportunity to begin again, this time more intelligently."`,
    author: "Henry Ford",
  },
  {
    fr: '"Chaque algorithme est une mélodie, chaque projet une symphonie, les développeurs sont des compositeurs silencieux."',
    en: `"Every algorithm is a melody, every project a symphony, developers are silent composers."`,
  },
] as const;

export const aboutMeData = {
  title: "À propos de moi",
  title_EN: "About me",
  description: "Un petit aperçu de mon univers",
  description_EN: "A quick glimpse into my world",
  paragraphs_FR: [
    {
      title: "Passionné par le code et l’innovation",
      description:
        "Je suis développeur fullstack, curieux et passionné, toujours en quête de nouveaux défis techniques. Que ce soit sur le web, le mobile ou les API, j’aime donner vie à mes idées à travers le code.",
      icon: codeicon,
    },
    {
      title: "Entre IoT et Raspberry Pi",
      description:
        "L’Internet des Objets est une de mes passions. J’ai conçu des projets comme un système de monitoring d’un hangar à poules avec capteurs connectés et Raspberry Pi, en combinant hardware et software.",
      icon: hardwareicon,
    },
    {
      title: "Univers créatif & Gaming",
      description:
        "Je développe aussi sur FiveM en Lua, où je crée des scripts, des interfaces et des systèmes personnalisés. Pour moi, le code est aussi un moyen d’imaginer et de bâtir des mondes virtuels.",
      icon: gameicon,
    },
    {
      title: "Curiosité & apprentissage continu",
      description:
        "Je considère chaque projet comme une opportunité d’apprendre. La découverte de nouvelles technologies, de nouveaux outils ou même de nouveaux horizons nourrit ma créativité et mon envie d’innover.",
      icon: exploreicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Passionate about Code and Innovation",
      description:
        "I am a curious and passionate fullstack developer, always seeking new technical challenges. Whether on the web, mobile, or APIs, I love bringing ideas to life through code.",
      icon: codeicon,
    },
    {
      title: "Between IoT and Raspberry Pi",
      description:
        "The Internet of Things is one of my passions. I designed projects such as a monitoring system for a poultry barn with connected sensors and a Raspberry Pi, combining hardware and software.",
      icon: hardwareicon,
    },
    {
      title: "Creative Universe & Gaming",
      description:
        "I also develop on FiveM with Lua, creating scripts, interfaces, and custom systems. For me, code is also a way to imagine and build virtual worlds.",
      icon: gameicon,
    },
    {
      title: "Curiosity & Lifelong Learning",
      description:
        "I see every project as an opportunity to learn. Discovering new technologies, tools, or even new horizons fuels my creativity and my desire to innovate.",
      icon: exploreicon,
    },
  ],
};


export const contactData = {
  title: {
    fr: "Contact",
    en: "Contact",
  },
  description: {
    fr: "Ecrivez un message !",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        fr: "Votre Nom",
        en: "Your Name",
      },
      type: "text",
      validation: {
        fr: "Remplissez votre nom",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        fr: "Votre Mail",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        fr: "Remplissez votre mail",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        fr: "Votre sujet",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        fr: "Remplissez votre sujet",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      fr: "Ton Message",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      fr: "Ecrivez votre message",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      fr: "Envoyé",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      fr: "J'accepte qu'Othmane utilise mes données personnelles (nom et adresse e-mail) pour me contacter.",
      en: "I agree that Othmane may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      fr: "En soumettant cette demande, vous reconnaissez avoir lu la politique de confidentialité",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    fr: "🦄 La démo en direct va bientôt s’ouvrir. Démarrage des serveurs...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    fr: "🦄 Merci pour ton email. Je reviendrai vers toi dès que possible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    fr: "🦄 L’envoi de ton email a échoué. Merci de réessayer plus tard.",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    fr: "Merci d’indiquer ton nom.",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    fr: "FR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
