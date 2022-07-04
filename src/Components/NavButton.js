import styles from './NavButton.module.css'

const NavButton = ({ text, link }) => {
    return(
        <a href={link} target="_blank" rel="noreferrer">
            <button className={styles.secondaryBtn}>{text}</button>
        </a>
    )
}

export default NavButton;