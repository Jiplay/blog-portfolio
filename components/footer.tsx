import Container from './container'
import Image from 'next/image'
import style from "./style/style.module.css"

const Footer = () => {
  return (
    <footer className="border-t" style={{ backgroundColor: 'rgb(42, 43, 44)' }}>
      <Container rgb={[42, 43, 44]}>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h1 className="text-4xl text-white lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
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
            <div className='mt-3 ml-3'>
              <a href='https://github.com/Jiplay'>
              <Image
              src="/assets/icons/github.png"
              alt={`Github`}
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
