import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  tag: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tag,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <h1> tag  = {tag}</h1>
        <CoverImage slug={slug} title={title} tag={tag} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`${tag}`}
          href={tag}
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
