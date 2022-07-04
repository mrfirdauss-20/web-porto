import konsulin from "../../assets/konsulin.png"
import dna from '../../assets/dna.png'
import hikery from '../../assets/hikery.png'
import imagecompress from "../../assets/imagecompress.png"
import workoutin from '../../assets/workoutin.png'
import wecome from '../../assets/wecome.png'
export const data =[
    {
        title: "DNA and Disease Prediction Web",
        description: "DNA and Disease WebApp is a web that is able to compare the DNA of patients and disease DNA using Boyer Moore and KMP Algorithm, filter the input, determine the distance of the DNA and save the data of DNA and search history in MySQL. This web application was built using MySQL, expressjs and React. Responsible for developing the server application and building the Levenshtein distance algorithm.",
        image: dna,
    },
    {
        title: "Workoutin",
        description: "Workouting is desktop application that built using Python, PyQt. Responsible for developing adding database, enmvironment and add workout types module.",
        image: workoutin,
    },
    {
        title: "Image Compressor",
        description: "Building website for compressing image using python flask and SVD algorithm. Responsible for developing the server and setup microservice using flask.",
        image: imagecompress,
    },
    {
        title: "Hikery",
        description: "Website for landing page and rentaling outdoor gear. Built using PHP, MySQL and Golang. I was responsible for coordinating the team that consist 2 people, concepting and maintaining the website.",
        url: "http://www.hikery.co/",
        image: hikery
    },
    {
        title: "Wecome",
        description: "Welcome is a website that provides competition information for ITB students. Built the first version website using PHP MySQL. Was responsible for building the backend system and deploying the first version.",
        image: wecome
    },
    {
        title: "Konsulin",
        description: "CKonsulin is consultation web that built for muslimhackfest 2021. I was responsible for leading the development team. Develop Whatsapp chatbot and website services using node js. Maintaining the JQuery for the websites. Deploying the web via Heroku.",
        url: "https://bit.ly/KonsulIn",
        image: konsulin
    },
]
