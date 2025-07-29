import profilePic from '../assets/main.jpg';
import styles from './Card.module.css'

function Card(){

    return(
        <div className={styles.card}>
            <img className={styles["card-image"]} src={profilePic} alt="profile picture" ></img>
            <h2  className={styles["card-title"]}>Ebi Codes</h2>
            <p className={styles["card-text"]}>I am studying Information and  Communication Engineering and I love cybesecurity and coding</p>
        </div>
    );
};


export default Card;