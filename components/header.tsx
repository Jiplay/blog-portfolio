import Link from 'next/link'
import style from "./style/style.module.css"


const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter mb-20 text-white">
      <Link href="/" className={style.customLink}>
        Blog
      </Link>
      .
    </h2>
  )
}

export default Header
