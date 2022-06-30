import styles from './navbar.module.css'

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
                    TBA
                </div>
            </div>
        </div>
    </div>
    )
}

export default NavBar;