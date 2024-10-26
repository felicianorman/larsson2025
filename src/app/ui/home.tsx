import { AlexBrush } from "../layout";
import styles from "../page.module.css";

export default function Home() {
    return (
        <div className={`${styles.banner} ${AlexBrush.variable}`}>
            <p>Björn & Felicia</p>
        </div>
    );
}
