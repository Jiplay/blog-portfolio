import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  tag: string
  slug?: string
  printImage?: boolean
}

const CoverImage = ({ title, src, tag, slug, printImage }: Props) => {
  let image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full rounded-lg', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1300}
      height={630}
    />
  )
  // if (printImage === true) {
  //   image = (
  //     <Image
  //       src={src}
  //       alt={`Cover Image for ${title}`}
  //       className={cn('shadow-sm w-full', {
  //         'hover:shadow-lg transition-shadow duration-200': slug,
  //       })}
  //       style={{
  //         "maxWidth": "800px",
  //         "display": "block",  // Pour centrer horizontalement
  //         "margin": "auto",    // Pour centrer horizontalement
  //         "alignItems": "center",
  //         "justifyItems": "center",
  //   }}
  //       width={1300}
  //       height={630}
  //     />
  //   )
  // }
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={tag} href={tag} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
