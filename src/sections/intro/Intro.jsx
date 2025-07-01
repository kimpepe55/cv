import styles from "./Intro.module.css";
export default function Intro({ data }) {
    return (
        <div className={styles.intro_container}>
            <h1 className={styles.intro_title}>{data.name}</h1>
            <p className={styles.intro_specialization}>{data.specialization}</p>
        </div>
    );
}
