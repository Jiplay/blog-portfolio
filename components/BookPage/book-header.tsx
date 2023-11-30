import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import CoverImage from '../cover-image'
import PostTitle from '../post-title'
import SVGWithModal from './bookshelf';
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
      <div className="mb-8 md:mb-16 sm:mx-0">
        <SVGWithModal width={20} height={20} />
      </div>
      <div className="max-w-2xl mx-auto">
        {/* <div className="block md:hidden mb-6"> */}
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        {/* </div> */}
      </div>
    </>
  )
}

export default ProHeader
