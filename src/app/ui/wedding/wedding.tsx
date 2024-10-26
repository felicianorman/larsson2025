
import { default as GoogleMapComponent, default as GoogleMapsComponent } from "@/app/lib/googleMaps";
import Image from "next/image";
import { AlexBrush, JosefinSans } from "../../layout";
import WeddingImg from "../../public/ezgif-7-839be1d761.png";
import styles from "./wedding.module.css";

export default function Wedding() {
    return (
        <div className={`${styles.content} ${AlexBrush.variable}`} id="#wedding">
            <h2>Vigsel</h2>
            <div className={`${styles.contentPlacement} ${JosefinSans.variable}`}>
                <Image src={WeddingImg} alt="Wedding" />

                <p>
                    Vigseln sker kl 14.00 på Djursholms Slott, på slottsgården.
                    <br />
                    <br />
                    Du tar dig hit kollektivt med buss 606 mot Djursholms Torg, som går från
                    Danderyds Sjuhkus eller Mörby Centrum.
                    <br />
                    Med bil tar du avfart 178 från E18 mot Djursholm och följer skyltning mot
                    Djursholms Slott.
                    <br></br>
                    <br />
                    Adress: Banérvägen 6, 182 63 Djursholm
                </p>
                <GoogleMapComponent />
            </div>
        </div>
    );
}