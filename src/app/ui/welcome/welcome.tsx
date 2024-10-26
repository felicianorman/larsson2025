import Image from "next/image";
import { JosefinSans } from "../../layout";
import WelcomeImg from "../../public/MixCollage-26-Oct-2024-03-15-PM-4501.jpg";
import styles from "./welcome.module.css";

export default function Welcome() {
    return (
        <div className={`${styles.content} ${JosefinSans.variable}`} id="#home">
            <div className={`${styles.contentLeft}`}>
                <Image src={WelcomeImg} alt="Welcome" />
            </div>
            <div className={`${styles.contentRight}`}>
                <p>Varmt välkommen! Du har kommit till den här hemsidan för att vi vill bjuda in dig på vårat bröllop.
                    Efter att ha varit tillsammans i 5 år har vi bestämt oss för att ta nästa steg i vårat förhållande, och vi vill fira den dagen med dig!
                    <br /><br />
                    På vår sida har vi samlat all information du behöver för att fira med oss. Vi hoppas att du hittar allt du behöver här.
                </p>
            </div>
        </div>
    );
}