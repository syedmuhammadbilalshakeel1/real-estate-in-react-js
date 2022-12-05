import Carousel from 'react-bootstrap/Carousel';
import FirstIMAGE from '../assets/images/project-1920x870-greens.jpg'
import SEcondIMAGE from '../assets/images/zq-lee-VbDjv8-8ibc-unsplash.jpg'
import ThirdIMAGE from '../assets/images/darcey-beau-q8D7WZc40eA-unsplash.jpg'
import '../CUstom.css'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100 "
          src={FirstIMAGE}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Image_Slider1"
          src={SEcondIMAGE}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Image_Slider2"
          src={ThirdIMAGE}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
       </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;