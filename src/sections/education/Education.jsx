import "../../styles/index.css";
import styles from "./Education.module.css";

export default function Education({ data }) {
    return (
        <div className={styles.education_container}>
            <h2 className="title">Education</h2>
            <ul>
                {data.Education.map((education) => (
                    <li className="section_item">
                        <h3 className="item_date">{education.date}</h3>
                        <div className="item_info">
                            <h2 className="item_title">{education.Place}</h2>
                            <p>{education.Specialization}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
