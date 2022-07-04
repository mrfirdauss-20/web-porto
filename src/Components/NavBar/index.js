import styles from './navbar.module.css'
import NavButton from '../NavButton';
const NavBar = ()=>{
    return(
    <div className={styles.navbar}>
        <div className={styles.NavbarContainer}>
            <div className={styles.logo}>
                RF<span>.</span>
            </div>

            <div className={styles.navbarItems}>
                <div className={styles.navbarItem}>
                    Home
                </div>
                <div className={styles.navbarItem}>
                    Experiences
                </div>
                <div className={styles.navbarItem}>
                  <NavButton color="#35323B"  style={{color: "white"}} text="Hire Me!" link="https://wa.me/6282245200501" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default NavBar;