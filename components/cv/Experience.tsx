import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 
import ExampleCarouselImage from './carouselImage';

function Experience() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Carousel controls={false} interval={10000} wrap={true} style={{ width: '60%', height: '90vh', maxHeight: '100vh' }}>
        <Carousel.Item>
          <ExampleCarouselImage text="/cv/oxio1.png" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="/cv/oxio2.png" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="/cv/schoolab.png" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="/cv/MFL.png" />
        </Carousel.Item>
        {/* <Carousel.Item>
          <ExampleCarouselImage text="/cv/oxiov2.png" />
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}


export default Experience;
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}