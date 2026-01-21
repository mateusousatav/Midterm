import styles from '../styles/Navbar.module.css'
import logo from '../assets/assets_cozy_tea/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {

    return(
        <nav>
            <Link to='/'><img className={styles.logoImg} src={logo} alt="TeaCozy" /></Link>
            <ul className={styles.navLinks}>
                <Link className={styles.linkText} to='/our-mission'>Our Mission</Link>
                <Link className={styles.linkText} to='/featured-tea'>Featured Tea</Link>
                <Link className={styles.linkText} to='/locations'>Locations</Link>
            </ul>
        </nav>
    );
}

export default Navbar