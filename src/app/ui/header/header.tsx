import { AlexBrush, JosefinSans } from "../../layout";
import styles from "./header.module.css";

export default function Header() {
    return (
        <div className={`${styles.banner} ${AlexBrush.variable}`}>
            <div className={`${styles.bannerContent}`}>
                <p>Björn & Felicia</p>
                <ul className={`${JosefinSans.variable}`}>
                    <li>
                        <a href="#home">Hem</a>
                    </li>
                    <li>Vigseln</li>
                    <li>Festen</li>
                    <li>Bra att veta</li>
                    <li>OSA</li>
                </ul>
            </div>
        </div>
    );
}
