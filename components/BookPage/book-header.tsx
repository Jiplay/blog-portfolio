import Avatar from '../avatar'
import PostTitle from '../post-title'
import type Author from '../../interfaces/author'

type Props = {
  title: string
  author: Author
}

const ProHeader = ({ title, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </>
  )
}

export default ProHeader
