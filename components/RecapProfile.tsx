import React from 'react';

import AcquisitionsChart from "./Radar";


import styles from './style/recap.module.css';
import authorProfileType from "../interfaces/authorProfileType";

type Props = {
    authorData: authorProfileType
}

const slogan = ["MOST", "PROUD", "OF"]

const ProfileView = ({ authorData }: Props) => {
    const getDots = (skill) => {
        const a = 34 - skill.length
        return '.'.repeat(a)
    }
    return (
        <div id="root" className={styles.root}>
            <div className={styles.pokedex}>
                <div className={`${styles.panel} ${styles.leftPanel}`}>
                    <div className={`${styles.pokemonName} ${styles.screen}`}>
                        {authorData.Name} <span className={styles.nameNo}>#{authorData.FavNumber}</span>
                    </div>
                        <div className={styles.pokemonSprite} style={{maxHeight: ""}}>
                            <img src={authorData.PictureUrl} alt="me" />
                        </div>
                    <div className={styles.screen}>
                        <div className={styles.pokemonDescription}>
                            {authorData.Description}
                        </div>
                    </div>
                </div>

                <div className={`${styles.divider}`}></div>

                <div className={`${styles.panel} ${styles.rightPanel}`}>
                    <div className={styles.panelRow}>
                        <div className={`${styles.screen} ${styles.stats}`}>
                            <div>
                                {authorData.Skills.map((skill) => (
                                    <div className={styles.statLine}>
                                        {skill.Title}{getDots(skill.Title)}{skill.nb}
                                    </div>
                                )) }
                            </div>
                        </div>
                    <div className={styles.typeList}>
                        <div className={styles.panelHeader}> TYPES</div>
                        <div className={styles.typeBox}>
                            {authorData.Types.map((type) => (
                                <div className={`${styles.type} ${styles[type.Type]}`}>{type.Text}</div>
                            ))}
                        </div>
                    </div>

                    </div>
                    <div className={`${styles.panelRow} ${styles.panelEvo}`}>
                        {authorData.Trophies.map((trophy, key) => (
                            <div>
                                <div className={styles.flexCenter}>
                                    <div className={styles.evoNum}> {slogan[key]}</div>
                                </div>
                                <img src={trophy.PictureURL}
                                     alt="pokemon" className={`${styles.pokemonSprite} ${styles.pokemonSpriteSmall}`}/>
                                <div className={`${styles.screen} ${styles.evoName}`}>{trophy.Title}</div>
                            </div>
                        ))}
                        <div className={styles.screen}>
                            <AcquisitionsChart RadarData={authorData.RadarData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
