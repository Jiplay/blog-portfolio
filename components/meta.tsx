import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/icon.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/icon.png"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/icon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="JG Blog"
        content={`Website of Julien Garsia, where you'll find everything he wants to share about his activities`}
      />
      <meta property="og:image" content={"/postImg/hero.png"} />
    </Head>
  )
}

export default Meta
