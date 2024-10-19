import React from "react";
import styles from './style/card1.module.css';
import CardType from "../interfaces/card";
import Link from "next/link";

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
                <Link href={Card.link} as={Card.link} aria-label={Card.link} style={{textDecoration: "none"}}>
                    <div className={styles.cardBtn}>
                        <div className={styles.cardTitle} > Browse </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MainCard;
