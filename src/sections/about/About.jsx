import styles from "./About.module.css";
import "../../styles/index.css";
export default function About({ data }) {
    return (
        <div className={styles.about_container}>
            <div className={styles.about_profile}>
                <h2 className="title">Profile</h2>
                <p>{data.Profile}</p>
            </div>
            <div className={styles.about_contacts}>
                <h2 className="title">Contacts</h2>
                <ul className={styles.contact_list}>
                    {data.Contacts.map((contact) => (
                        <li className={styles.contact_item}>
                            <strong>{contact.type}:</strong> {contact.value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
