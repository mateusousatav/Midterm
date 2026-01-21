import styles from '../styles/Locations.module.css'
import locationsBackground from '../assets/assets_cozy_tea/img-locations-background.jpg'

function Locations() {

    return(
        <div className={styles.hero3}>
            <img className={styles.backgroundImg2} src={locationsBackground} alt="Locations Background" />
            <div className={styles.overlay}>
                <div className={styles.loc}>
                    <h2>Locations</h2>
                </div>
                <div className={styles.threeBoxes}>
                    <div className={styles.box1}>
                        <ul>
                            <li>Downtown</li>
                            <li>384 West 4th St</li>
                            <li>Suite 108</li>
                            <li>Portland, Maine</li>
                        </ul>
                    </div>
                    <div className={styles.box2}>
                        <ul>
                            <li>East Bayside</li>
                            <li>3433 Phisherman's Ave</li>
                            <li>(Northwest Corner)</li>
                            <li>Portland, Maine</li>
                        </ul>
                    </div>
                    <div className={styles.box3}>
                        <ul>
                            <li>Oakdale</li>
                            <li>515 Crescent Ave</li>
                            <li>Second Floor</li>
                            <li>Portland, Maine</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Locations