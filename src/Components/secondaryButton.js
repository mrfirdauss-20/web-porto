import styles from './secondaryButton.module.css'

const SecondaryButton = ({ text, link }) => {
    return(
        <a href={link} target="_blank" rel="noreferrer">
            <button className={styles.secondaryBtn}>{text}</button>
        </a>
    )
}

export default SecondaryButton;