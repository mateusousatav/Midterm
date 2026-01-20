import styles from '../styles/Navbar.module.css'
import logo from '../assets/assets_cozy_tea/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {

    return(
        <nav>
            <img className={styles.logoImg} src={logo} alt="TeaCozy" />
            <ul className={styles.navLinks}>
                <Link to='/our-mission'>Our Mission</Link>
                <Link to='/featured-tea'>Featured Tea</Link>
                <Link to='/locations'>Locations</Link>
            </ul>
        </nav>
    );
}

export default Navbar