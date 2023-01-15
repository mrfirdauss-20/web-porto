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
                    <a href='https://github.com/mrfirdauss-20'>Github</a> | <a href='https://gitlab.com/mrfirdauss-20'>Gitlab</a> | <a href='https://www.kaggle.com/mrfirdauss20'>Kaggle</a> <br></br> <a href='https://www.linkedin.com/in/mrfirdauss/'>Linkedin</a> | <a href='https://mrfirdauss.medium.com/'>Blog</a>
                    </p>
                </div>
                <div className={styles.btnCont}>
                    <SecondaryButton color="#2F2C35" text="Download CV" link="https://docs.google.com/document/d/1SJnTc6l0LZ2WGr0kxkmMdcx6uaQ0Trje/export?format=pdf" />
                </div>
            </div>
            <div className={styles.center}>
                <img src={risqi} alt="orang ganteng" className={styles.imgHero}/>
            </div>
            <div className={styles.right}>
                <h3>INTRODUCTION</h3>
                <h2>Software Engineer, <br /> Web Developer, <br />Data Enthusiast</h2>
                <p>
                An undergraduate informatic student who experienced in web and chatbot development. Eager to learn about developing technological things. Able to quickly learn and acclimate to new technologies. Besides that, he has a lot of experience being a leader in teams and national organizations.
                </p>
                <p><strong>Awards: </strong>Gold Medalist Gemastik Data Mining Division 2022, Best Mentees (Top 1%) Telkom Digistar Class 2022, Top 10 Jabar Data Viz Fest 2022, Top 6 Paragon Hackathon Competition 2022</p>
            </div>
        </div>
    );
};

export default Hero;