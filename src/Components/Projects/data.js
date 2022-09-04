import konsulin from "../../assets/konsulin.png"
import dna from '../../assets/dna.png'
import imagecompress from "../../assets/imagecompress.png"
import workoutin from '../../assets/workoutin.png'
import workoutin_web from '../../assets/worktoutin_web.png'
export const data =[
    {
        title: "Workoutin Web App",
        description: "eCommerce web app that gives user solutions for looking for a personal trainer. Built a web app using React and Firebase. Responsible for building a personal trainer details page and chat services. Also responsible for deploying web on AWS Amplify. The chat service was built using a realtime database, firebase. The clone on vercel.",
        image: workoutin_web,
        url: "https://workoutin.vercel.app/"
    },
    {
        title: "DNA and Disease Prediction Web",
        description: "DNA and Disease WebApp is a web that is able to compare the DNA of patients and disease DNA using Boyer Moore and KMP Algorithm, filter the input, determine the distance of the DNA and save the data of DNA and search history in MySQL. This web application was built using MySQL, expressjs and React. Responsible for developing the server application and building the Levenshtein distance algorithm.",
        image: dna,
    },
    {
        title: "Image Compressor",
        description: "Building website for compressing image using python flask and SVD algorithm. Responsible for developing the server and setup microservice using flask.",
        image: imagecompress,
    },
    {
        title: "Workoutin Desktop App",
        description: "Workouting is desktop application that built using Python, PyQt. Responsible for developing adding database, enmvironment and add workout types module.",
        image: workoutin,
    },
    {
        title: "Konsulin",
        description: "CKonsulin is consultation web that built for muslimhackfest 2021. I was responsible for leading the development team. Develop Whatsapp chatbot and website services using node js. Maintaining the JQuery for the websites. Deploying the web via Heroku.",
        url: "https://bit.ly/KonsulIn",
        image: konsulin
    },
]
