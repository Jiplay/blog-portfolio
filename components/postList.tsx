import PostTitle from './post-title'
import type Author from '../interfaces/author'
import type PostType from '../interfaces/post'
import ArticleCard from "./ArticleCard";
import {Col, Row} from "react-bootstrap";


type Props = {
    posts: PostType[]
}

const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
};

const PostList = ({posts}: Props) => {
    const postChunks = chunkArray(posts, 3);

    return ( // TODO Aligne En 3 colonnes wesh & prend 1 style en paramètre différente couleur etc
        <div style={{marginBottom: "100px"}}>
            {postChunks.map((chunk, index) => (
            <Row key={index} style={{marginBottom: "15px"}}>
                    {chunk.map((post: PostType, i: number) => (
                            <Col  key={i} md={4}>
                                <ArticleCard post={post} id={i}/>
                            </Col>
                    ))}
            </Row>
            ))}
        </div>
    )
}

export default PostList
