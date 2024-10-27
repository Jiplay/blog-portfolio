import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import style from "./style/style.module.css"
import Post from "../interfaces/post";

type Props = {
    post: Post
}

const PostPreview = ({
  post
}: Props) => {
  return (
    <div>
      <div className="" >
        <CoverImage title={post.title} tag={post.tag} src={post.coverImage} slug={post.slug} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
      </h3>
      <p className="text-white leading-relaxed mb-4">{post.excerpt}</p>
    </div>
  )
}

export default PostPreview
