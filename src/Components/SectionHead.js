import styles from './SectionHead.module.css'

const SectionHead = ({ subtitle, title, text }) => {
    return(
        <div className={styles.box}>
            <h2 className={styles.subtitle}>
                {subtitle}
            </h2>
            <h1 className={styles.title}>
                {title}
            </h1>
            {text ? <p className={styles.p}>{text}</p>: null}
        </div>
    );
}

export default SectionHead;