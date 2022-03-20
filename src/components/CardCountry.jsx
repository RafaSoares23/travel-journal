import styles from "../../src/card.module.css";

export default function CardCountry(props) {
    return (
        <div className={styles.card}>
            <div className={styles.flex__cols}>
                <img src={props.local.imgUrl} alt="title " />
                <div className={styles.country__desc}>
                    <h4>
                        <ion-icon name="pin"></ion-icon>
                        {props.local.location}
                        <a href={props.local.googleMapUrl} target="_blank" rel="noopener noreferrer"> 
                            <ion-icon name="map-outline"></ion-icon>
                            View on Maps
                        </a>
                    </h4>
                    <h2>{props.local.title}</h2>
                    <span className={styles.time}>
                        {props.local.startDate}
                        <ion-icon name="arrow-redo-outline"></ion-icon>
                        {props.local.endDate}
                    </span>
                    <p>
                     {props.local.description}
                    </p>
                </div>
            </div>
        </div>
    )
}