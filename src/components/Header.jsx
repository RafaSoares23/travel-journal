import styles from "../../src/header.module.css";

export default function Header (props) {
    return (
        <section className={styles.header}>
            <div className={styles.header__content}>
                <ion-icon name={props.icon}></ion-icon>
                <h1>{props.title}</h1>
            </div>
        </section>
    )
}