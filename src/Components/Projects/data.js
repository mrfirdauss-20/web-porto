import keras from "../../assets/keras.png"
import dna from '../../assets/dna.png'
import collaborative from "../../assets/image.png"
import ristek from '../../assets/ristek.png'
import mercator from '../../assets/mercator.png'
import apayak from '../../assets/apayak.png'
import imagecompress from '../../assets/imagecompress.png'
import tableau from '../../assets/tableau.png'
import online_retail from '../../assets/online_retail.png'
import RaG_Phi3 from '../../assets/RaG_Phi3.png'
import BukaPluang from '../../assets/BukaPluang.jpg'
import supc from '../../assets/supc.png'


export const data =[
    {
        title: "Retrieval-Augmented Generation using Phi3 for Paper Question Answer",
        description: "The Retrieval-Augmented Generation (RAG) system leverages the capabilities of Faiss for efficient similarity search and retrieval, along with Phi3 for natural language generation, to create an advanced question-answering (QA) system specifically designed for academic papers. This project aims to enhance the accessibility and usability of academic research by enabling users to obtain precise answers to their queries from a vast repository of scientific papers.",
        image: RaG_Phi3,
        url: "https://www.kaggle.com/code/mrfirdauss20/rag-phi3"
    },
    {
        title: "Collaborative Filtering for Twitch Recommender System",
        description: "Developing model for Twitch Recomender System based on user activity log. Best model was developed using Collaborative Filtering",
        image: collaborative,
        url: "https://www.canva.com/design/DAF2ErIl9iQ/zs2PyzY9bLDV4rf616jcAw/view?utm_content=DAF2ErIl9iQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
        title: "Online Retail Analysis",
        image: online_retail,
        description: "Analysis of an online retail dataset. The notebook covers various steps including data preparation, exploratory data analysis (EDA), and deriving insights from customer purchasing behavior. It includes preprocessing and generating descriptive statistics. The analysis also explores sales trends, customer segmentation using RFM (Recency, Frequency, Monetary) analysis, and visualization techniques to present findings effectively.",
        url: "https://www.kaggle.com/code/mrfirdauss20/online-retail-analysis#Preparation"
    },
    {
        title: "Enhanced PWM Measures to Build Inflation Resilience for Lowest Decile Service Workers",
        image: supc,
        description: " This project is focusing on improving the Progressive Wage Model (PWM) to protect service workers against inflation. Conducted in-depth socioeconomic analysis, formulated strategic enhancements, and presented the proposal in the semifinal round to a panel of industry experts. Gained skills in policy analysis, public speaking, and strategic planning, while receiving commendable feedback for analytical depth and practical applicability.",
        url: "https://docs.google.com/presentation/d/1thCI02J7_CAsDxOmFQb_3R54liVpC0P4/edit?usp=sharing&ouid=115342788512911538620&rtpof=true&sd=true"
    },
    {
        title: "BukaPluangBersama for Pluang Market Penetration through Community Collaboration",
        description: "Developed a comprehensive pitch deck for the final round of the 180DC APAC Case Competition, focusing on innovative solutions for Pluang problem in market penetration.",
        image: BukaPluang,
        url: "https://docs.google.com/presentation/d/17YleNZZ-g-JA3c-6nagHQo2RzZ59-xRH4QG2dytMG8c/edit?usp=sharing"
    },
    {
        title: "Mercator Web App",
        description: "Mercator is a web app to calculate the needs of mangrove ecosystem cost based on spatial data and machine learning model. Responsible to develop spatial data pipeline and prediction  model.",
        image: mercator,
        url: "https://mercator-eight.vercel.app/"
    },
    {
        title: "Multi-Satellite Data for Estimating the Gross Regional Domestic Product",
        description: "Responsible for building data pipeline using Google Earth Engine and making an spatial exploratory data analysis. Predicting Gross Regional Domestic Product based on spatial data and transfer rate in Central Java Province.",
        image: apayak,
        url: "https://docs.google.com/presentation/d/1pzfouyMhu2eR53uRRXmdRbmSagMYj3HDTw-HIaVlJdc/edit?usp=sharing"
    },
    {
        title: "Sentiment Analysis Teks Berita dengan Keras Embedding dan Double Layer LSTM",
        description: "Responsible for developing BiLSTM Model and making an exploratory data analysis. Predicting sentiment analysis of news text using Keras Embedding and Double Layer LSTM.",
        image: keras,
        url: "https://mrfirdauss.medium.com/sentiment-analysis-teks-berita-dengan-keras-embedding-dan-double-layer-lstm-f3714f5f4c1a"
    },
    {
        title: "Prediksi Rerata Kecepatan di Jalan dengan Prophet dan Grouping Data",
        description: "Responsible for doing EDA and Feature Engineering, by explorating the traffic speed timeseries data in London.",
        image: ristek,
        url: "https://docs.google.com/document/d/1Gvc2TmnTeJ-zeDqFmlGcyWm3KJ3e_xYuCyHe5Ike8xc/export?format=pdf"
    },
    {
        title: "Dashboard Tableau Pengaruh Angka Harapan Hidup di Jawa Barat",
        description: "Creating Tableau dashboard for Province executive. Responsible for conducting and developing dashbaord.",
        image: tableau,
        url: "https://public.tableau.com/app/profile/muhamad.fikri.nurohman4226/viz/JDVF2022-PengaruhAngkaHarapanHidupJawaBarat/Final?publish=yes"
    },
    {
        title: "Image Compressor",
        description: "Building website for compressing image using python flask and SVD algorithm. Responsible for developing the server and setup microservice using flask.",
        image: imagecompress,
    },
    {
        title: "DNA and Disease Prediction Web",
        description: "DNA and Disease WebApp is a web that is able to compare the DNA of patients and disease DNA using Boyer Moore and KMP Algorithm, filter the input, determine the distance of the DNA and save the data of DNA and search history in MySQL. This web application was built using MySQL, expressjs and React. Responsible for developing the server application and building the Levenshtein distance algorithm.",
        image: dna,
    }
]
