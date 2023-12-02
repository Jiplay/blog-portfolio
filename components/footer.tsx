import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h1 className="text-4xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          Contact : julien.garsia@proton.me
          {/* <a href="https://storyset.com/book" style={{ color: 'black' }}> </a> */}
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="/cv/JulienGARSIA.pdf"
              download="Julien.pdf"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              style={{ textDecoration: 'none' }} // Ajoutez cette ligne pour supprimer le soulignement
            >
              Download my resume
            </a>
            
            <div>
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
