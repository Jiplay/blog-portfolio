import {Button} from "react-bootstrap";

const Intro = ({title, description}) => {
  return (
      <section className="text-white flex flex-col md:flex-row items-center justify-between mt-0 mb-0 w-full" style={{ backgroundColor: 'rgb(28, 29, 32)' }}>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight text-center md:text-left flex-1">
              {title}
          </h1>
          <Button variant="secondary" className="font-bold bg-gray-400 text-white cursor-not-allowed ml-auto" disabled>
              Login
          </Button>
      </section>
  )
}
// JG Blog.
// Musings of a Learning-Centric Developer
export default Intro
