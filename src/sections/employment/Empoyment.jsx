import "../../styles/index.css";
import styles from "./Employment.module.css";

export default function Employment({ data }) {
    return (
        <div className={styles.employment_container}>
            <h2 className="title">Employment</h2>
            <ul>
                {data.Employment.map((employment) => (
                    <li className="section_item">
                        <h3 className="item_date">{employment.date}</h3>
                        <div className="item_info">
                            <h2 className="item_title">{employment.Place}</h2>
                            <p>{employment.Specialization}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}