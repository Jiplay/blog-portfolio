import React from "react";
import styles from './style/card1.module.css';
import CardType from "../interfaces/card";

type Props = {
    Card: CardType;
}


const MainCard: React.FC<Props> = ({Card}: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" viewBox="0 0 16 16">
                    {Card.svg.map((path, index) => (
                        <path key={index} d={path}/>
                    ))}
                </svg>
            </div>
            <div className={styles.cardTitle}>{Card.title}</div>
            <div className={styles.cardSubtitle}>
                {Card.description}
            </div>
            <hr className={styles.cardDivider}/>
            <div className={styles.cardFooter}>
                <div className={styles.cardPrice}>
                    <span>$</span> 123.45
                </div>
                <button className={styles.cardBtn}>
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"/>
                        <path
                            d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"/>
                        <path
                            d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"/>
                        <path
                            d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MainCard;
