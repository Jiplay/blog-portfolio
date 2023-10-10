import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 
import ExampleCarouselImage from './carouselImage';

function Experience() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Carousel fade controls={false} interval={10000} style={{ width: '80%', height: '80%' }}>
        <Carousel.Item>
          <ExampleCarouselImage text="/cv/oxiov2.png" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="/cv/oxio.png" />
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