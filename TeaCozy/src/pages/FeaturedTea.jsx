import styles from '../styles/FeaturedTea.module.css'
import berryBlitz from '../assets/assets_cozy_tea/berryblitz.jpg'
import spicedRum from '../assets/assets_cozy_tea/spiced-rum.jpg'
import donut from '../assets/assets_cozy_tea/img-donut.jpg'
import myrtleAve from '../assets/assets_cozy_tea/myrtle-ave.jpg'
import bedfordBizarre from '../assets/assets_cozy_tea/bedford-bizarre.jpg'

function FeaturedTea() {

    return(
        <div className={styles.hero2}>
            <div className={styles.text}>
                <h2>Tea of the Month</h2>
                <h4>What's Sleeping at the Tea Cozy?</h4>
            </div>
            <div className={styles.imgs}>
                <div className={styles.imgDivs}>
                    <img className={styles.pics} src={berryBlitz} alt="Fall Berry Blitz Tea" />
                    <h4>Fall Berry Blitz Tea</h4>
                </div>
                <div className={styles.imgDivs}>
                    <img className={styles.pics} src={spicedRum} alt="Spice Rum Tea" />
                    <h4>Spice Rum Tea</h4>
                </div>
                <div className={styles.imgDivs}>
                    <img className={styles.pics} src={donut} alt="Seasonal Donuts" />
                    <h4>Seasonal Donuts</h4>
                </div>
                <div className={styles.imgDivs}>
                    <img className={styles.pics} src={myrtleAve} alt="Myrtle Ave Tea" />
                    <h4>Myrtle Ave Tea</h4>
                </div>
                <div className={styles.imgDivs}>
                    <img className={styles.pics} src={bedfordBizarre} alt="Bedford Bizzare Tea" />
                    <h4>Bedford Bizzare Tea</h4>
                </div>
            </div>
        </div>
    );
}

export default FeaturedTea