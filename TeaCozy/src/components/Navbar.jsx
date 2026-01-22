import styles from '../styles/Navbar.module.css'
import logo from '../assets/assets_cozy_tea/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const[isToggled, setIsToggled] = useState(false);
    const linksClassName = isToggled ? styles.toggledMenu : styles.notToggledMenu;
    
    const handleMenu = () => {
        setIsToggled(!isToggled);
    };

    return(
        <nav>
            <Link to='/'><img className={styles.logoImg} src={logo} alt="TeaCozy" /></Link>
            <div className={styles.toggleContainer}>
                <button className={styles.navButton} onClick={handleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                </button>
                <ul className={linksClassName}>
                    <Link className={styles.linkText} to='/our-mission'>Our Mission</Link>
                    <Link className={styles.linkText} to='/featured-tea'>Featured Tea</Link>
                    <Link className={styles.linkText} to='/locations'>Locations</Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar

/*import styles from '../styles/Navbar.module.css'
import logo from '../assets/assets_cozy_tea/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const[isToggled, setIsToggled] = useState(false);

    const handleMenu = () => {
        setIsToggled(!isToggled);
    };

    return(
        <nav>
            <Link to='/'><img className={styles.logoImg} src={logo} alt="TeaCozy" /></Link>
            <ul className={styles.navLinks}>
                <Link className={styles.linkText} to='/our-mission'>Our Mission</Link>
                <Link className={styles.linkText} to='/featured-tea'>Featured Tea</Link>
                <Link className={styles.linkText} to='/locations'>Locations</Link>
            </ul>
            <svg onClick={handleMenu} className={isToggled ? "styles.toggledMenu" : "styles.notToggledMenu"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
        </nav>
    );
}

export default Navbar*/