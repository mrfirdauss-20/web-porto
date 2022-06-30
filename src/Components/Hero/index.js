import styles from './style.module.css'
import pribadi from '../../pribadi.png'
import risqi from '../../risqi.png'
import SecondaryButton from '../secondaryButton'
const Hero = () => {
    return(
        <div className={styles.heroBg}>
            <div className={styles.left}>
                <h1>Muhammad Risqi <br /> Firdaus<span>.</span></h1>
                <hr />
                <div className={styles.contact}>
                    <p>
                    <a href='https://github.com/mrfirdauss-20'>Github</a> | <a href='https://gitlab.com/mrfirdauss-20'>Gitlab</a> | <a href='https://www.kaggle.com/muhammadrisqifirdaus'>Kaggle</a> | <a href='https://www.linkedin.com/in/mrfirdauss/'>Linkedin</a>
                    </p>
                </div>
                <div className={styles.btnCont}>
                    <SecondaryButton text="Download CV" link="https://google.com" />
                </div>
            </div>
            <div className={styles.center}>
                <img src={risqi} alt="logo" />
            </div>
            <div className={styles.right}>
                <h3>INTRODUCTION</h3>
                <h2>Software Engineer, <br /> Web Developer, <br />Data Enthusiast</h2>
                <p>
                An undergraduate informatic student who experienced in web and chatbot development. Eager to learn about developing technological things. Able to quickly learn and acclimate to new technologies. Besides that, he has a lot of experience being a leader in teams and national organizations.
                </p>
            </div>
        </div>
    );
};

export default Hero;