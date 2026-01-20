import styles from '../styles/OurMission.module.css'
import background1 from '../assets/assets_cozy_tea/background.jpg'
function OurMission() {

    return(
        <div className={styles.hero1}>
            <img className={styles.backgroundImg} src={background1} />
            <div className={styles.overlay1}>
                <h2>Our Mission</h2>
                <h4>Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea</h4>
            </div>
        </div>
    );
}

export default OurMission