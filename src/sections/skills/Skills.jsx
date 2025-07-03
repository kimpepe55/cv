import "../../styles/index.css";
import styles from "./Skills.module.css";

const levelToPercent = {
    Expert: 85,
    Proficient: 70,
    Novice: 50,
};

export default function Skills({ data }) {
    return (
        <div className={styles.skills_container}>
            <h2 className="title">Skills</h2>
            <ul className={styles.skills_list}>
                {data.Skills.map((skill) => (
                    <li key={skill.name} className={styles.section_item}>
                        <h3 className="item_title">{skill.name}</h3>
                        <div className={styles.item_content}>
                            <div className={styles.skillBar}>
                                <div
                                    className={styles.skillLevel}
                                    style={{
                                        width: `${
                                            levelToPercent[skill.level]
                                        }%`,
                                    }}></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
