import keras from "../../assets/keras.png"
import dna from '../../assets/dna.png'
import collaborative from "../../assets/image.png"
import ristek from '../../assets/ristek.png'
import mercator from '../../assets/mercator.png'
import apayak from '../../assets/apayak.png'
import imagecompress from '../../assets/imagecompress.png'
import tableau from '../../assets/tableau.png'

export const data =[
    {
        title: "Collaborative Filtering for Twitch Recommender System",
        description: "Developing model for Twitch Recomender System based on user activity log. Best model was developed using Collaborative Filtering",
        image: collaborative,
        url: "https://www.canva.com/design/DAF2ErIl9iQ/zs2PyzY9bLDV4rf616jcAw/view?utm_content=DAF2ErIl9iQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
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
