import React from "react";
import styles from "./style/articleCard.module.css";
import PostType from "../interfaces/post";
import Link from "next/link";



type Props = {
    post: PostType
    id: number
}

const style = ["linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;",
    ""]


const ArticleCard = ({ post, id }: Props) => {

    return (
    <Link href={post.tag} style={{ textDecoration: "none", color: "white" }}>
        <div className={`${styles.card} ${id % 2 === 0 ? styles.gradient1 : styles.gradient2}`}>
            <div className={styles["main-content"]}>
                <div className={styles.header}>
                    <span>Article on</span>
                    <span>{post.date.slice(0, 10)}</span>
                </div>
                <p className={styles.heading}>{post.title}</p>
                <div className={styles.categories}>
                    {post.themes?.map((theme) => (
                        <span>{theme}</span>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>{post.excerpt}</div>
        </div>
    </Link>
    );
};

export default ArticleCard;
