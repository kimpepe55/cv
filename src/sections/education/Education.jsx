import "../../styles/index.css";
import styles from "./Education.module.css";

export default function Education({ data }) {
    return (
        <div className={styles.education_container}>
            <h2 className="title">Education</h2>
            <ul>
                {data.Education.map((education) => (
                    <li className={styles.education_item}>
                        <h3>{education.date}</h3>
                        <div className={styles.edu_info}>
                            <h2 className={styles.edu_title}>{education.Place}</h2>
                            <p>{education.Specialization}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
