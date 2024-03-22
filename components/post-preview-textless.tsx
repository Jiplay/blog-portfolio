import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import style from "./style/style.module.css"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  tag: string
}

const PostPreviewTextless = ({
  title,
  coverImage,
  slug,
  tag,
}: Props) => {
  return (
    <div>
      <div className="mb-5" >
        <CoverImage title={title} tag={tag} src={coverImage} slug={slug} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`${tag}`}
          href={tag}
          className={style.customLink}
          style={{ color: 'black' }}
        >
        </Link>
      </h3>
    </div>
  )
}

export default PostPreviewTextless
