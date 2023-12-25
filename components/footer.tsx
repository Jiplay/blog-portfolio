import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Image from 'next/image'
import style from "./style/style.module.css"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h1 className="text-4xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          Contact : julien.garsia@proton.me
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="/cv/JulienGARSIA.pdf"
              download="Julien.pdf"
              className={style.linkButton}
              style={{ textDecoration: 'none' }}
            >
              Download my resume
            </a>
            <div className='mt-3'>
              <a href='https://www.linkedin.com/in/julien-garsia/'>
              <Image
              src="/assets/icons/linkedin.png"
              alt={`LinkedIn`}
              width={50}
              height={50}
              />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
