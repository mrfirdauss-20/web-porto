import styles from './style.module.css'
//import pribadi from '../../pribadi.png'
import risqi from '../../risqi.png'
import SecondaryButton from '../secondaryButton'
const Hero = () => {
    return(
        <div className={styles.heroBg}>
            <div className={styles.left}>
                <h1 className={styles.title}>Muhammad Risqi <br /> Firdaus<span>.</span></h1>
                <hr />
                <div className={styles.contact}>
                    <p>
                    <a href='https://github.com/mrfirdauss-20'>Github</a> | <a href='https://gitlab.com/mrfirdauss'>Gitlab</a> | <a href='https://www.kaggle.com/mrfirdauss20'>Kaggle</a> <br></br> <a href='https://www.linkedin.com/in/mrfirdauss/'>Linkedin</a> | <a href='https://mrfirdauss.medium.com/'>Blog</a>
                    </p>
                </div>
                <div className={styles.btnCont}>
                    <SecondaryButton color="#2F2C35" text="Download CV" link="https://docs.google.com/document/d/1PpTaGoCOyWByo626is2QhkzX1vQplQIX9S_YSMV0oXc/export?format=pdf" />
                </div>
            </div>
            <div className={styles.center}>
                <img src={risqi} alt="orang ganteng" className={styles.imgHero}/>
            </div>
            <div className={styles.right}>
                <h3>INTRODUCTION</h3>
                <h2>Data Enthusiast</h2>
                <p>
                <br />
                A Data Analyst Engineer with a strong background in data science, analysis, and big data technologies. Has published a paper at the IEEE ICoDSe 2024 conference. He led impactful initiatives that saved millions in costs through advanced analytics and data pipeline optimization using Hadoop, Spark and Machine Learning through his experience at Huawei, Kitalulus and PT Paragon. Along with multiple awards in national and international data competitions. He is also active in technical projects and mentoring.
                </p>
                <br />
                <p><strong>Awards: </strong> <b>Silver Medal</b> International Carbon Counting Competition 2023, <b>Honorable Mention</b> Datahon Ristek UI 2023, <b>Gold Medalist</b> Gemastik Data Mining 2022, <b>Top 10</b> Kemenkeu Data Quals-Data Mining 2023, and many more. </p>
            </div>
        </div>
    );
};

export default Hero;
